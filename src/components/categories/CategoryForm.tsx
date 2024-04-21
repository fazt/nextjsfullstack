"use client";

import { Button, Card, Input, Label } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCategorySchema } from "@/schemas/categorySchema";
import { useRouter } from "next/navigation";

function CategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createCategorySchema),
  });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/dashboard/categories");
    router.refresh();
  });

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <Label>Nombre de la Categoría</Label>
        <Input {...register("name")} />
        {errors.name?.message && (
          <p className="text-red-500">{errors.name?.message as string}</p>
        )}

        <Label>Descripción de la Categoría</Label>
        <Input {...register("description")} />

        <Label>Publicado</Label>
        <Input type="checkbox" {...register("published")} />

        <Button className="block mt-2" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Crear Categoría"}
        </Button>
      </form>
    </Card>
  );
}

export default CategoryForm;
