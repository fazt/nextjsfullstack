import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface Session {
    user: {
      name: string;
      email: string;
      image?: string;
      lastname: string;
      id: number;
      role: string;
      confirmed: boolean;
    }
  }
}