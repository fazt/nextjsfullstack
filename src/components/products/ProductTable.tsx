"use client";

import { Product } from "@prisma/client";
import { Avatar, Button, Table } from "../ui";

interface Props {
  products: Product[];
}

function ProductTable({ products }: Props) {
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
      cell: (info) => {
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
      accessorKey: "category",
    },
    {
      header: "Author",
      accessorKey: "author",
    },
    {
      header: "Acciones",
      cell: () => {
        return (
          <div className="flex gap-x-2">
            <Button href="/dashboard/products/edit">Editar Producto</Button>
          </div>
        );
      },
    },
  ];

  return <Table data={products} columns={columns} />;
}

export default ProductTable;
