"use client";
import { Input, Label, Button } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "@/schemas/productSchema";

function ProductPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(createProductSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const product = await res.json();
    console.log(product);
    if(res.status === 201){
      reset();
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Label>Nombre del Producto</Label>
        <Input {...register("name")} />
        {errors.name && errors.name.message && (
          <span className="text-red-500 block text-sm">
            {errors.name.message.toString()}
          </span>
        )}

        <Label>Descripción</Label>
        <Input {...register("description")} />
        {errors.description && errors.description.message && (
          <span className="text-red-500 block text-sm">
            {errors.description.message.toString()}
          </span>
        )}

        <Label>Precio</Label>
        <Input
          {...register("price", { valueAsNumber: true })}
          defaultValue={0}
        />
        {errors.price && errors.price.message && (
          <span className="text-red-500 block text-sm">
            {errors.price.message.toString()}
          </span>
        )}

        <Label>Imagen</Label>
        <Input {...register("image")} />
        {errors.image && errors.image.message && (
          <span className="text-red-500 block text-sm">
            {errors.image.message.toString()}
          </span>
        )}

        <Label>Categoría</Label>
        <Input {...register("category")} />
        {errors.category && errors.category.message && (
          <span className="text-red-500 block text-sm">
            {errors.category.message.toString()}
          </span>
        )}

        <Button className="block mt-2">Crear Producto</Button>
      </form>
    </div>
  );
}

export default ProductPage;
