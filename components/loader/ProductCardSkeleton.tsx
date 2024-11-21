const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-lg shadow-sm border overflow-hidden">
      <div className="aspect-square bg-gray-300 animate-pulse"></div>

      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        <div className="h-3 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
      </div>

      <div className="p-4 pt-0">
        <div className="h-10 bg-gray-300 rounded w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
