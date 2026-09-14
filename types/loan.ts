// types/loan.ts
import { LucideIcon } from "lucide-react";

export type LoanProduct = {
  title: string;
  description: string;
  icon: LucideIcon;
  category: "individual" | "business" | "specialized";
  href: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};
