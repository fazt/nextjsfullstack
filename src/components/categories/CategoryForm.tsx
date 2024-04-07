"use client";

import { Button, Input, Label } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCategorySchema } from "@/schemas/categorySchema";

function CategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(createCategorySchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(res.status === 201){
      reset();
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Nombre de la Categoría</Label>
      <Input {...register("name")} />
      {errors.name?.message && (
        <span className="text-red-500 block text-sm">
          {errors.name.message.toString()}
        </span>
      )}

      <Label>Descripción de la Categoría</Label>
      <Input {...register("description")} />
      {errors.description?.message && (
        <span className="text-red-500 block text-sm">
          {errors.description.message.toString()}
        </span>
      )}

      <Label>Publicado</Label>
      <Input type="checkbox" {...register("published")} />
      {errors.published?.message && (
        <span className="text-red-500 block text-sm">
          {errors.published.message.toString()}
        </span>
      )}

      <Button className="block mt-2">Crear Categoría</Button>
    </form>
  );
}

export default CategoryForm;
