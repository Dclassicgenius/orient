import { LeftArrow } from "@/components/icons/LeftArrow";
import ProductPageSkeleton from "@/components/loader/ProductPageSkeleton";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "force-cache",
    next: { revalidate: 300 },
  });
  if (!res.ok) {
    throw new Error("Не удалось получить продукт");
  }
  return res.json();
}

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  return (
    <main className="px-4 py-8 container mx-auto">
      <Link href="/" className="inline-block mb-8">
        <button className="py-4 rounded-lg font-semibold px-7 hover:bg-gray-100 flex gap-2 items-center">
          <LeftArrow />
          Обратно на главную
        </button>
      </Link>

      <Suspense fallback={<ProductPageSkeleton />}>
        <ProductDetails id={id} />
      </Suspense>
    </main>
  );
};

export default Page;

const ProductDetails = async ({ id }: { id: string }) => {
  const product = await getProduct(id);
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="aspect-square relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-2xl font-bold">{product.price.toFixed(2)} ₽</p>

        <p>{product.description}</p>
        <button className="w-full md:w-auto bg-black text-white py-3 rounded-lg font-semibold uppercase md:px-6">
          В корзину
        </button>
      </div>
    </div>
  );
};
