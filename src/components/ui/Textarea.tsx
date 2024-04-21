"use client";
import { forwardRef } from "react";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ children, ...props }, ref) => {
  return (
    <textarea className="bg-slate-200 rounded px-2 py-1" {...props} ref={ref}>
      {children}
    </textarea>
  );
});

Textarea.displayName = "Input";
