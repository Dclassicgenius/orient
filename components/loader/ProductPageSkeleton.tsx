const ProductPageSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="aspect-square bg-gray-300 rounded-lg"></div>

      <div className="space-y-4">
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-12 bg-gray-300 rounded w-full mt-4"></div>
      </div>
    </div>
  );
};

export default ProductPageSkeleton;
