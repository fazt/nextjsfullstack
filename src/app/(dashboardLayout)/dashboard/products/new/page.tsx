"use client";
import { Input, Label, Button, Card } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "@/schemas/productSchema";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function ProductPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(createProductSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const resp = await axios.post("/api/products", data);
      if (resp.status === 201) {
        reset();
      }

      toast.success("Product create successfully");

      setTimeout(() => {
        router.push("/dashboard/products");
        router.refresh();
      }, 2000);
    } catch (error) {
      toast.error("Error creating product");
    }
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <Card>
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

          <Label>Slug</Label>
          <Input {...register("slug")} />
          {errors.slug && errors.slug.message && (
            <span className="text-red-500 block text-sm">
              {errors.slug.message.toString()}
            </span>
          )}
        </Card>

        <Button href="" className="block mt-2">
          Crear Producto
        </Button>
      </form>
    </>
  );
}

export default ProductPage;
