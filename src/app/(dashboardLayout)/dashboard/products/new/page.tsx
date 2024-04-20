"use client";

import { Input, Label, Button, Card } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "@/schemas/productSchema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function ProductPage() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(createProductSchema),
  });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.image.length > 0) {
      const formData = new FormData();
      formData.append("file", data.image[0]);
      const result = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const uploadData = await result.json();
      data.image = uploadData.secure_url;
    }

    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/dashboard/products");
    router.refresh();

    toast.success("Producto creado");
  });

  console.log(watch("image"));

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
        <Input type="file" {...register("image")} />

        {watch("image") && (
          <img
            src={URL.createObjectURL(watch("image")[0])}
            className="w-20 h-20"
          />
        )}

        <Label>Categoría</Label>
        <Input {...register("category")} />

        <Label>Slug</Label>
        <Input {...register("slug")} />

        <Button className="block mt-2" type="submit">
          Crear Producto
        </Button>
      </form>
    </Card>
  );
}

export default ProductPage;
