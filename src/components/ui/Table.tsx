export function Table({ products }) {
  return (
    <table className="min-w-full divide-y divide-gray-300 mb-4">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Precio
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Descripcion
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Stock
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Imagen
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {products.map((product) => (
          <tr key={product.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              {product.name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {product.price}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {product.description}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {product.stock}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {product.imagen}
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Edit<span className="sr-only">, {product.name}</span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
