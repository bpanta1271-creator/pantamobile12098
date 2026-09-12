import Link from "next/link";
import { money } from "@/lib/utils";

type Product = { name:string; slug:string; price:number; comparePrice:number|null; images:{url:string}[]; brand:string|null; stock:number };
export function ProductCard({product}:{product:Product}){return <Link className="card" href={`/product/${product.slug}`}><div className="product-image"><img src={product.images[0]?.url || "/images/store-8.jpg"} alt={product.name}/></div><div className="product-body"><span className="pill">{product.brand || "Mobile"}</span><h3>{product.name}</h3><div><span className="price">{money(product.price)}</span>{product.comparePrice ? <span className="compare">{money(product.comparePrice)}</span>:null}</div><p className="muted" style={{fontSize:12,marginBottom:0}}>{product.stock>0?`${product.stock} in stock`:"Out of stock"}</p></div></Link>}
