// components/common/section.tsx
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "dark" | "surface";
};

export default function Section({
  children,
  className = "",
  id,
  variant = "default",
}: SectionProps) {
  let bgClass = "bg-background text-foreground";
  if (variant === "dark") {
    bgClass = "bg-cyprus text-sand";
  } else if (variant === "surface") {
    bgClass = "bg-surface text-foreground";
  }

  return (
    <section
      id={id}
      className={`py-20 md:py-28 lg:py-32 ${bgClass} ${className}`}
    >
      {children}
    </section>
  );
}
