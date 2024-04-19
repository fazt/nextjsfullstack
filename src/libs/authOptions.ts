import prisma from "@/libs/prisma";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt';
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        // username: { label: "email", type: "text"},
        // password: { label: "Password", type: "password"},
      },
      async authorize(credentials) {

        const {email, password} = credentials as {
          email: string,
          password: string
        }

        const userFound = await prisma.user.findUnique({
          where: {
            email
          }
        })

        if(!userFound){
          throw new Error("No User Found");
        }

        const mathPassword = await bcrypt.compare(password, userFound.password);

        if(!mathPassword){ 
          throw new Error("Password Incorrect");
        }

        return {
          id: userFound.id + "",
          name: userFound.name,
          lastname: userFound.lastname,
          email: userFound.email,
          role: userFound.role,
        }
      },
    }),
  ],
  callbacks: {
    jwt({user, token}){
      
      if(user){
        token = {...token, ...user}
      }

      return token
    },
    async session({session, token}){
      if(token){
        session.user = token
      }

      return session
    }
  },
  pages: {
    signIn: "/auth/login",
  }
}