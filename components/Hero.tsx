import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center px-8 py-16 gap-8 bg-neutral-50">
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          New Collection
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Minimal sneakers for everyday comfort
        </h1>
        <p className="text-gray-600 mb-6 max-w-lg">
          A clean and modern eCommerce experience inspired by premium fashion stores.
        </p>
        <Link
          href="/products"
          className="inline-block bg-black text-white px-6 py-3 rounded-md"
        >
          Shop Now
        </Link>
      </div>

      <div className="h-[400px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
        Product Image
      </div>
    </section>
  );
}