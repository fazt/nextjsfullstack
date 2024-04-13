import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
}

export function Button({ children, className, href, ...props }: Props) {
  if (href) {
    return (
      <Link
        href={href}
        className={twMerge(
          "block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={twMerge(
        "block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
