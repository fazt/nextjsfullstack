"use client";

import { Input, Label, Button, Card, QuillEditor } from "@/components/ui";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateProductInput,
  createProductSchema,
} from "@/schemas/productSchema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { Category } from "@prisma/client";
import Image from "next/image";

interface Props {
  categories: Category[];
}

function ProductForm({ categories }: Props) {
  const { control, register, handleSubmit, watch, setValue } =
    useForm<CreateProductInput>({
      resolver: zodResolver(createProductSchema),
    });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.image instanceof FileList && data.image.length) {
      const formData = new FormData();
      formData.append("file", data.image[0]);

      const result = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await result.json();
      data.image = uploadData.secure_url;
    }

    delete data.image;

    const result = await fetch("/api/products", {
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
        <Controller
          name="description"
          control={control}
          render={({ field }) => <QuillEditor {...field} />}
        />

        <Label>Precio</Label>
        <Input {...register("price")} type="number" defaultValue={0} />

        <Label>Imagen</Label>
        <Input type="file" {...register("image")} />

        {watch("image") instanceof FileList && watch("image") && (
          <Image
            src={URL.createObjectURL(watch("image")[0] as any)}
            alt="Product Image"
            className="w-20 h-20"
            width={80}
            height={80}
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
