import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="block border rounded-2xl overflow-hidden hover:shadow-lg transition">
      <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
        {product.name}
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 font-medium">${product.price}</p>
      </div>
    </Link>
  );
}