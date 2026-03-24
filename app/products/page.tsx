import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <div className="px-8 pt-10">
        <h1 className="text-4xl font-bold">Shop All Products</h1>
      </div>
      <ProductGrid />
    </main>
  );
}