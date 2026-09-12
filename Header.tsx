import Link from "next/link";

export function Header() {
  return <header className="nav"><div className="container nav-inner">
    <Link className="brand" href="/">PANTA MOBILE</Link>
    <nav className="navlinks"><Link href="/shop">Shop</Link><Link href="/category/smartphones">Phones</Link><Link href="/category/accessories">Accessories</Link><Link href="/repair">Repair</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
    <div className="nav-actions"><Link className="icon-btn" href="/wishlist">♡</Link><Link className="icon-btn" href="/cart">🛒</Link><Link className="icon-btn" href="/admin">Admin</Link></div>
  </div></header>;
}
