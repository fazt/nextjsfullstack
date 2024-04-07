import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={twMerge(
        "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
