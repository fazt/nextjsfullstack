import ProductCard from "@/components/products/ProductCard";
import prisma from "@/libs/prisma";

export default async function ProductsPage() {

  const products = await prisma.product.findMany({
    include: {
      user: true
    },
  });
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })}
        </div>
      </div>
    </div>
  );
}