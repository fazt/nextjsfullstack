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
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Label>Nombre del Producto</Label>
        <Input {...register("name")} />

        <Label>Descripción</Label>
        <Input {...register("description")} />

        <Label>Precio</Label>
        <Input {...register("price")} type="number" defaultValue={0} />

        <Label>Imagen</Label>
        <Input {...register("image")} />

        <Label>Categoría</Label>
        <Input {...register("category")} />

        <Button className="block mt-2">Crear Producto</Button>
      </form>
    </div>
  );
}

export default ProductPage;
