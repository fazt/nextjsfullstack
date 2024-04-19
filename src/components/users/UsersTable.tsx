'use client'
import React from 'react'
import { Button, Table } from '../ui'
import { User } from '@prisma/client'

interface Props {
  users: User[]
}

const UsersTable = ({users} : Props) => {
  
  const columns = [
    {
      header: "Name",
      accessorKey: "name"
    },
    {
      header: "LastName",
      accessorKey: "lastname"
    },
    {
      header: "Email",
      accessorKey: 'email'
    },
    {
      header: "Correo confirmado",
      accessorKey: "confirmed",
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
            <Button href="/dashboard/users/edit">Editar</Button>
            <Button className='bg-red-500 hover:bg-red-700' href="#">Eliminar</Button>
          </div>
        );
      },
    },
  ]

  return (
    <Table data={users} columns={columns} />
  )
}

export default UsersTable
