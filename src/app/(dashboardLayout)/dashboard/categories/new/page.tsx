import CategoryForm from "@/components/categories/CategoryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextfull - Crear Categoría",
  description: "Crear una nueva categoría",
};

export const dynamic = "force-dynamic";

function CategoryPage() {
  return (
    <div>
      <CategoryForm />
    </div>
  );
}

export default CategoryPage;
