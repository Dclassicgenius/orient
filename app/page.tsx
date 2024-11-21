import ProductListSkeleton from "@/components/loader/ProductListSkeleton";
import ProductList from "@/components/ProductList";
import Search from "@/components/Search";
import { Suspense } from "react";

export default async function Home(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <main className="px-4 py-8 container mx-auto">
      <div className="flex flex-col items-center mb-8 space-y-4">
        <h1 className="text-4xl font-bold text-center">Ориент Продукты</h1>
        <Search />
      </div>

      <Suspense fallback={<ProductListSkeleton length={8} />}>
        <ProductList query={query} />
      </Suspense>
    </main>
  );
}
