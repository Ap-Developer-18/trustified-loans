import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-cyprus text-sand hover:-translate-y-0.5 hover:shadow-lg",
    secondary: "bg-sand text-cyprus hover:bg-border",
    outline: "border-2 border-border bg-transparent text-cyprus hover:border-cyprus",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}