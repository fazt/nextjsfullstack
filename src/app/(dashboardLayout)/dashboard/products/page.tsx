import { authOptions } from "@/libs/authOptions";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth";
import { Button } from "@/components/ui";
import ProductTable from "@/components/products/ProductTable";

export const dynamic = "force-dynamic";

async function loadProducts() {
  const session = await getServerSession(authOptions);
  const products = await prisma.product.findMany({
    where: {
      authorId: Number(session?.user.id),
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  });
  return products;
}

async function DashboardProductsPage() {
  const products = await loadProducts();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-100">
            Productos
          </h1>
          <p className="mt-2 text-sm text-gray-100">Lista de productos</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button href="/dashboard/products/new">Crea un producto</Button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <ProductTable products={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardProductsPage;
