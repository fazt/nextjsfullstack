"use client"
import { forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input className="bg-slate-200 rounded px-2 py-2 mb-2" {...props} ref={ref} />
  );
});

Input.displayName = "Input";
