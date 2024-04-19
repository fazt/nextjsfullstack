import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  await prisma.category.create({
    data: {
      name: data.name,
      description: data.description,
    },
  });

  return NextResponse.json("Producto creado");
}
