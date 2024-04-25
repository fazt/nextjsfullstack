import prisma from "@/libs/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function PUT(request: Request, { params: { id } }: Params) {
  try {
    const data = await request.json();

    await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: data
    });

  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json("Failed to update product", { status: 400 });
    }
  }
}

export async function DELETE(request: Request, { params: { id } }: Params) {
  try {
    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Producto no encontrado" },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      { error: "No se pudo eliminar el producto" },
      { status: 500 }
    );
  }
}
