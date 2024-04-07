import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const newProduct = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      image: data.image,
      // categoryId: data.categoryId,
    },
  });
  return NextResponse.json(newProduct, { status: 201 });
}
