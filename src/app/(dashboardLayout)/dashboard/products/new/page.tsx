import ProductForm from "@/components/products/ProductForm";
import prisma from "@/libs/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextfull - Crear Producto",
};

interface Params {
  params: {
    id: string;
  };
}
async function ProductPage({params}: Params) {

  const id = params.id;
  
  const categories = await prisma.category.findMany();

  const productId = await prisma.product.findUnique({
    where: {
      id: Number(id),
    }
  })

  return (
    <>
      <ProductForm
        productId={productId}
        categories={categories} 
      />
    </>
  );
}

export default ProductPage;
