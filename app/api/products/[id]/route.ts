import { products } from "@/lib/data";
import { NextResponse } from "next/server";

type Params = Promise<{ id: string }>;
export async function GET(request: Request, productData: { params: Params }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const params = await productData.params;
  const product = products.find((product) => product.id === params.id);
  if (!product) {
    return new NextResponse("Продукт не найден", { status: 404 });
  }

  return NextResponse.json(product);
}
