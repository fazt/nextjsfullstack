"use client";

import { Input, Label, Button, Card } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "@/schemas/productSchema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
}

function ProductForm({ categories }: Props) {
  const { register, handleSubmit, watch, setValue } = useForm({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      slug: "",
      categories: null,
      image: null || [],
    },
  });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {

    if (data.image && data.image.length > 0) {
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

  console.log(categories);

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

        {watch("image")?.length && (
          <img
            src={URL.createObjectURL(watch("image")[0])}
            className="w-20 h-20"
          />
        )}

        <Label>Categoría</Label>
        <Select
          //   isSearchable={false}
          isMulti
          options={categories.map((category) => ({
            value: category.id,
            label: category.name,
          }))}
          onChange={(options: any) => {
            const ids = options.map((option: any) => option.value);
            setValue("categories", ids);
          }}
        />

        <Label>Slug</Label>
        <Input {...register("slug")} />

        <Button className="block mt-2" type="submit">
          Crear Producto
        </Button>
      </form>
    </Card>
  );
}
export default ProductForm;
