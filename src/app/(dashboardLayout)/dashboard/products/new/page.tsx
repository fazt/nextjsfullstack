"use client";
import { Input, Label, Button, Card } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "@/schemas/productSchema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function ProductPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductSchema),
  });
  const router = useRouter();

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

    router.push("/dashboard/products");
    router.refresh();

    toast.success("Producto creado");
  });

  return (
    <Card>
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

        <Label>Slug</Label>
        <Input {...register("slug")} />

        <Button className="block mt-2">Crear Producto</Button>
      </form>
    </Card>
  );
}

export default ProductPage;
