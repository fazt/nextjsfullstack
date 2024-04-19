import { Category } from "@prisma/client";
import { Table } from "../ui";

interface Props {
  categories: Category[];
}

function CategoriesTable({ categories }: Props) {

  const columns = [
    {
      header: "Nombre",
      accessor: "name",
    },
    {
      header: "Descripción",
      accessor: "description",
    },
    {
      header: "Acciones",
      accessor: "actions",
    },
  ];

  return <Table data={categories} columns={columns} />;
}

export default CategoriesTable;