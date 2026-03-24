import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b bg-white">
      <Link href="/" className="text-2xl font-bold">
        ShopClone
      </Link>

      <div className="flex gap-6 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/products">Shop</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}