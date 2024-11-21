import { products } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (products.length === 0) {
    return new NextResponse("Продукты не найдены", { status: 404 });
  }

  return NextResponse.json(products);
}
