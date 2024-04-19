import { authOptions } from "@/libs/authOptions";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const session = await getServerSession(authOptions);

    if(!session){
      return NextResponse.json({error: "Invalid session credentials"}, {status: 401})
    }
    
    const newProduct = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: parseFloat(data.price),
        image: data.image,
        userId: session.user.id
      },
    });
    return NextResponse.json(newProduct, { status: 201 });
    
  } catch (error) {
    if(error instanceof Error) {
      return NextResponse.json(error, { status: 404 });
    }
  }
}
