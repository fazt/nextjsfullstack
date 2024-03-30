import React from "react";
import Navbar from "@/app/home/components/Navbar";

export default function homeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}
