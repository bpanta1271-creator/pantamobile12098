import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Panta Mobile | Premium Mobile Shop",
  description: "Premium phones, accessories and mobile repair services from Panta Mobile."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><div className="topbar"><div className="container"><span>Premium phones • accessories • repair</span><span>eSewa & Khalti available</span></div></div><Header />{children}<Footer /></>;
}
