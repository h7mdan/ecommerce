import Navbar from "@/components/Navbar";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) return notFound();

  return (
    <main>
      <Navbar />
      <div className="grid md:grid-cols-2 gap-10 px-8 py-12">
        <div className="h-[500px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
          {product.name}
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <button className="bg-black text-white px-6 py-3 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}