import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import prisma from "@/libs/prisma";
import { Button } from "@/components/ui";
import CategoriesTable from "@/components/categories/CategoriesTable";

export const dynamic = "force-dynamic";

export default async function DashboardCategoriesPage() {
  const categories = await prisma.category.findMany();
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-100">
            Categorias
          </h1>
          <p className="mt-2 text-sm text-gray-100">Lista de categorias</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button href="/dashboard/categories/new">Crea una categoria</Button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <CategoriesTable categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
