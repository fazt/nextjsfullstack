'use client'
import React from 'react'
import { Button, Table } from '../ui'
import { Product } from '@prisma/client'

interface Props {
  products: Product[]
}

const ProductTable = ({products}: Props) => {
  
  const columns = [
    {
      header: 'Product Name',
      accessorKey: 'name'
    },
    {
      header: 'Price',
      accessorKey: 'price'
    },
    {
      header: 'Stock',
      accessorKey: 'stock'
    },
    {
      header: 'Categoria',
      accessorKey: 'category'
    },
    {
      header: 'Image',
      accessorKey: 'image'
    },
    {
      header: 'URL',
      accessorKey: 'slug'
    },
    {
      header: 'Author',
      accessorKey: 'author'
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
  ]

  return (
    <Table data={products} columns={columns} />
  )
}

export default ProductTable
