"use client";
import { useState } from "react";

type Item={id:string;name:string;slug:string;price:number;quantity:number;image?:string};
export function AddToCart({item}:{item:Omit<Item,"quantity">}){const [added,setAdded]=useState(false);function add(){const key="panta_cart";const cart:Item[]=JSON.parse(localStorage.getItem(key)||"[]");const found=cart.find(x=>x.id===item.id);if(found)found.quantity++;else cart.push({...item,quantity:1});localStorage.setItem(key,JSON.stringify(cart));window.dispatchEvent(new Event("cart-updated"));setAdded(true);setTimeout(()=>setAdded(false),1200)}return <button className="btn btn-dark" onClick={add}>{added?"Added ✓":"Add to cart"}</button>}
