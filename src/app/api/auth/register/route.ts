import { NextResponse } from "next/server"
import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";

export const POST = async (req: Request) => {
  
  try {
    const data = await req.json();
    
    data.password = await bcrypt.hash(data.password, 10);

    const createUser = await prisma.user.create({
      data: {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        password: data.password
      }
    });

    return NextResponse.json(createUser);

  } catch (error) {
    if(error instanceof Error) {
      return NextResponse.json(error, {
        status: 404,
      });
    }
  }
}