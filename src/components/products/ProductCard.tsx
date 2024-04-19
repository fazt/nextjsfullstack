"use client";
import { Product, User } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  product: Product & {
    user: User;
  };
}

function ProductCard({ product }: Props) {
  const router = useRouter();

  return (
    <div
      key={product.id}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
      onClick={() => {
        router.push(`/products/${product.slug}`);
      }}
    >
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <img
          src={product?.image}
          alt={product.image}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-gray-900">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <div>
            <img
              className="inline-block h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span>{product?.user?.name}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{product.stock}</p>
          <p className="text-base font-medium text-gray-900">{product.price}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;