'use client'
import { Category } from "@prisma/client";
import { Button, Table } from "../ui";

interface Props {
  categories: Category[];
}

function CategoriesTable({ categories }: Props) {
  
  const columns = [
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Descripción",
      accessorKey: "description",
    },
    {
      header: "Created at",
      accessorKey: "created_at",
    },
    {
      header: "Acciones",
      cell: () => {
        return (
          <div className="flex gap-x-2">
            <Button href="/dashboard/products/edit">Editar Categoria</Button>
          </div>
        );
      },
    },
  ];

  return <Table data={categories} columns={columns} />;
}

export default CategoriesTable;
