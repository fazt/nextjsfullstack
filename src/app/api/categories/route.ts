import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  const categoryName = await prisma.category.create({
    data: {
      name: data.name,
      description: data.description,
      published: data.published,
    },
  });

  return NextResponse.json(categoryName, { status: 201 });
}
