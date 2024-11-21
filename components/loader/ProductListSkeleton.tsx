import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductListSkeleton = ({ length }: { length: number }) => {
  const skeletons = Array.from({ length: length });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
      {skeletons.map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductListSkeleton;
