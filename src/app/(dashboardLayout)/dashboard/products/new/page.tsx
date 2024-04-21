import ProductForm from "@/components/products/ProductForm";
import prisma from "@/libs/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextfull - Crear Producto",
};

async function ProductPage() {
  const categories = await prisma.category.findMany();
  console.log(categories);

  return (
    <>
      <ProductForm categories={categories} />
    </>
  );
}

export default ProductPage;
