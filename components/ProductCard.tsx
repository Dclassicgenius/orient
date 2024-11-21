import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col rounded-lg shadow-sm border overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.shortDescription}</p>
        <p className="text-lg font-bold ">{product.price.toFixed(2)} ₽</p>
      </div>

      <Link href={`/products/${product.id}`} className="p-4 pt-0 w-full">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold uppercase">
          Подробнее
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
