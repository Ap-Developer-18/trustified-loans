import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-border bg-surface shadow-sm overflow-hidden ${className}`}>
      {children}
    </div>
  );
}