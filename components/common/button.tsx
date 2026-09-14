// components/common/button.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-px active:translate-y-0 focus-visible:ring-2 focus-visible:ring-cyprus/20";

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles = "bg-cyprus text-sand hover:bg-cyprus/90 shadow-sm";
  } else if (variant === "secondary") {
    variantStyles =
      "border border-border bg-surface text-cyprus hover:border-cyprus/40 hover:bg-cyprus/5 shadow-sm";
  } else if (variant === "light") {
    variantStyles = "bg-sand text-cyprus hover:bg-sand/90 shadow-sm";
  } else if (variant === "ghost") {
    variantStyles = "bg-transparent text-cyprus hover:bg-cyprus/5";
  }

  let sizeStyles = "";
  if (size === "sm") {
    sizeStyles = "px-5 h-10 text-xs";
  } else if (size === "md") {
    sizeStyles = "px-7 h-12 text-sm";
  } else if (size === "lg") {
    sizeStyles = "px-9 h-14 text-base";
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
