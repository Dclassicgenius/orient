import { Product } from "@/types";
import ProductCard from "./ProductCard";

const getProducts = async (query?: string): Promise<Product[]> => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Не Удалось получить Продукты");
  }

  const products: Product[] = await res.json();

  if (query) {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  return products;
};

const ProductList = async ({ query }: { query: string }) => {
  const products = await getProducts(query);
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-semibold">Ничего не найдено</h2>
        <p className="text-gray-600 mt-2">Попробуйте изменить запрос</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
