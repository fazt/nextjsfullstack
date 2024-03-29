import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className }: Props) {
  return (
    <button
      className={twMerge(
        "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded",
        className
      )}
    >
      {children}
    </button>
  );
}
