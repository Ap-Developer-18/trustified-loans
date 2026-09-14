// data/loan-products.ts

import {
  Banknote,
  CreditCard,
  Home,
  User,
  Briefcase,
  Building2,
  ShieldAlert,
  RefreshCw,
  Layers,
  TrendingUp,
} from "lucide-react";

import { LoanProduct, ProcessStep } from "@/types/loan";

export const loanProducts: LoanProduct[] = [
  {
    title: "Home Loan",
    description:
      "Buy, build or renovate your home with the right financing option.",
    icon: Home,
    category: "individual",
    href: "#apply",
  },

  {
    title: "Personal Loan",
    description:
      "Get funds for your personal needs with a simple loan process.",
    icon: User,
    category: "individual",
    href: "#apply",
  },

  {
    title: "Business Loan",
    description: "Get funds to start, manage or grow your business.",
    icon: Briefcase,
    category: "business",
    href: "#apply",
  },

  {
    title: "Loan Against Property",
    description: "Use your residential or commercial property to get funds.",
    icon: RefreshCw,
    category: "specialized",
    href: "#apply",
  },

  {
    title: "Project Loan",
    description: "Get funding for new projects, expansion and development.",
    icon: Building2,
    category: "business",
    href: "#apply",
  },

  {
    title: "Cash Credit Limit",
    description: "Manage your business's day-to-day working capital needs.",
    icon: Banknote,
    category: "business",
    href: "#apply",
  },

  {
    title: "Overdraft Facility",
    description:
      "Access additional funds when your business needs extra cash flow.",
    icon: CreditCard,
    category: "business",
    href: "#apply",
  },

  {
    title: "Bridge Finance",
    description:
      "Short-term funding to manage immediate financial requirements.",
    icon: Layers,
    category: "specialized",
    href: "#apply",
  },

  {
    title: "NPA & OTS Funding",
    description:
      "Financial assistance for NPA resolution and OTS requirements.",
    icon: ShieldAlert,
    category: "specialized",
    href: "#apply",
  },

  {
    title: "Stressed Asset Finance",
    description:
      "Funding solutions for businesses facing financial difficulties.",
    icon: TrendingUp,
    category: "specialized",
    href: "#apply",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Share Your Requirements",
    description:
      "Tell us what kind of loan you need and share some basic details.",
  },

  {
    number: "02",
    title: "Explore Your Options",
    description:
      "We help you understand the loan options that may suit your needs.",
  },

  {
    number: "03",
    title: "Complete the Process",
    description:
      "We guide you through the required documents and loan process.",
  },

  {
    number: "04",
    title: "Move Forward",
    description:
      "Once approved, move ahead with your loan with clear information at every step.",
  },
];

export const whyChooseUsBenefits = [
  {
    number: "01",
    title: "Expert Guidance",
    description:
      "Get clear guidance from your first enquiry through the loan process.",
  },

  {
    number: "02",
    title: "Multiple Loan Options",
    description:
      "Explore different loan options based on your personal or business needs.",
  },

  {
    number: "03",
    title: "Clear & Transparent",
    description:
      "We explain the process, requirements and available options clearly.",
  },

  {
    number: "04",
    title: "End-to-End Support",
    description: "Our team is here to help you throughout the loan process.",
  },
];
