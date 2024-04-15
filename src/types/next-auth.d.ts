// eslint-disable-next-line no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      name: string;
      email: string;
      image: string;
      id: number;
      lastname: string;
      role: string;
      confirmed_email: boolean;
    };
  }
}
