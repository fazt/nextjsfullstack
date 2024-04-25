"use client";
import { forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" {...props} ref={ref} />
  );
});

Input.displayName = "Input";
