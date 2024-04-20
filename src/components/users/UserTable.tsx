"use client";
import { User } from "@prisma/client";
import { Table } from "../ui/Table";
import { Button } from "../ui";

interface Props {
  users: User[];
}

function UserTable({ users }: Props) {
  const columns = [
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Apellido",
      accessorKey: "last_name",
    },
    {
      header: "Correo",
      accessorKey: "email",
    },
    {
      header: "Correo confirmado",
      accessorKey: "confirmed_email",
    },
    {
      header: "Rol",
      accessorKey: "role",
    },
    {
      header: "Acciones",
      cell: () => {
        return (
          <div className="flex gap-x-2">
            <Button>Editar</Button>
            <Button className="bg-red-500 hover:bg-red-700">Eliminar</Button>
          </div>
        );
      },
    },
  ];

  return <Table data={users} columns={columns} />;
}
export default UserTable;
