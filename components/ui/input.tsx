import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`h-14 w-full rounded-2xl bg-surface border border-border px-5 text-sm font-medium text-cyprus outline-none focus:border-cyprus focus:ring-2 focus:ring-cyprus/20 transition-all placeholder:text-muted/50 ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";