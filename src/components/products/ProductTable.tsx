"use client";

import { Product } from "@prisma/client";
import { Avatar, Badge, Button, Modal, Table } from "../ui";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Props {
  products: Product[];
}

function ProductTable({ products }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const router = useRouter();

  async function handleDeleteProduct(id: number) {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.status === 204) {
      toast.success("Product deleted successfully");
      router.refresh();
    }

    if (res.status === 404) {
      toast.error("Product not found");
    } else if (res.status === 500) {
      toast.error("Error deleting product");
    }

    setOpen(false);
  }

  const columns = [
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Precio",
      accessorKey: "price",
    },
    {
      header: "Stock",
      accessorKey: "stock",
    },
    {
      header: "Imagen",
      accessorKey: "image",
      cell: (info: any) => {
        const { image } = info.row.original;
        return <Avatar src={image} alt="imagen" />;
      },
    },
    {
      header: "URL",
      accessorKey: "slug",
    },
    {
      header: "Categoria",
      accessorKey: "categories",
      cell: (info: any) => {
        const { categories } = info.row.original;

        const categoriesName = categories.map((category: any) => {
          return category.category.name;
        });

        return (
          <div className="flex gap-x-2">
            {categoriesName.map((category: string) => (
              <Badge key={category}>{category}</Badge>
            ))}
          </div>
        );
      },
    },
    {
      header: "Author",
      accessorKey: "author",
    },
    {
      header: "Acciones",
      cell: (info: any) => {
        const { id } = info.row.original;
        return (
          <div className="flex gap-x-2">
            <Button href="/dashboard/products/edit">Editar Producto</Button>
            <Button
              className="bg-red-500 hover:bg-red-600"
              onClick={() => {
                setSelectedProductId(id);
                setOpen(true);
              }}
            >
              Eliminar
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table data={products} columns={columns} />;
      <Modal open={open} setOpen={setOpen}>
        <h3 className="text-slate-200 font-bold h3">
          Estas Seguro de querer eliminar?
        </h3>
        <p className="text-slate-400">
          Esta accion no se puede deshacer y se perdera toda la informacion del
          producto
        </p>
        <div className="flex gap-x-2 justify-end mt-2">
          <Button
            className="bg-red-500 hover:bg-red-600"
            onClick={() => {
              if (!selectedProductId) return;
              handleDeleteProduct(selectedProductId);
            }}
          >
            Si, Eliminar
          </Button>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
        </div>
      </Modal>
    </>
  );
}

export default ProductTable;
