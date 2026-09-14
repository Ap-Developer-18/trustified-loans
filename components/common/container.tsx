// components/common/container.tsx
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide";
};

export default function Container({
  children,
  className = "",
  size = "wide",
}: ContainerProps) {
  const maxWidthClass = size === "wide" ? "max-w-7xl" : "max-w-6xl";
  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${className}`}
    >
      {children}
    </div>
  );
}
