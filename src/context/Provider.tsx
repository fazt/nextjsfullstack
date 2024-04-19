"use client";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export function Provider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}