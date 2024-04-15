import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import Prisma from "@prisma/client";
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials: any): any {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const userFound = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!userFound) {
          throw new Error("usuario y contraseña incorrectos");
        }

        const matchPassword = await bcrypt.compare(
          password,
          userFound.password
        );

        if (!matchPassword) {
          throw new Error("usuario y contraseña no validos");
        }

        return {
          id: userFound.id,
          name: userFound.name,
          email: userFound?.email,
          lastname: userFound.last_name,
          role: userFound.role,
          confirmed_email: userFound.confirmed_email,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token = { ...token, ...user };
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          ...token,
        };
      }

      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
