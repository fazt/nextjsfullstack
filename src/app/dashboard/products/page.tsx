import { authOptions } from "@/libs/authOptions";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth";

async function ProductsPage() {
  const session = await getServerSession(authOptions);
  const products = await prisma.product.findMany({
    where: {
      authorId: session?.user.id,
    },
  });
  console.log(products);

  return (
    <div>
      <h1>Lista de Productos</h1>

      <table>
        <thead>
          <tr>
            <th>
              <td>Nombre</td>
              <td>Price</td>
              <td>Stock</td>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsPage;
