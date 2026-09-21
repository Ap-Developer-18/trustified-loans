"use client";

import { ArrowUpRight } from "lucide-react";
import { LoanProduct } from "@/types/loan";

type LoanProductCardProps = {
  product: LoanProduct;
  index: number;
};

const loanValueMap: Record<string, string> = {
  "Home Loan": "home-loan",
  "Personal Loan": "personal-loan",
  "Business Loan": "business-loan",
  "Loan Against Property": "loan-against-property",
  "Project Loan": "project-loan",
  "Cash Credit Limit": "cash-credit",
  "Overdraft Facility": "overdraft",
  "Bridge Finance": "bridge-finance",
  "NPA & OTS Funding": "npa-ots-funding",
  "Stressed Asset Finance": "stressed-asset-finance",
};

export default function LoanProductCard({ product }: LoanProductCardProps) {
  const IconComponent = product.icon;

  const handleApply = (e: React.MouseEvent) => {
    e.preventDefault();
    const formValue = loanValueMap[product.title] || "";

    window.dispatchEvent(
      new CustomEvent("select-loan-type", { detail: formValue }),
    );
  };

  return (
    <article
      className="group flex h-full w-full flex-col justify-between
      rounded-3xl border border-white/20
      bg-[#003f38] p-5 sm:p-6
      shadow-2xl transition-all duration-300
      select-none [-webkit-tap-highlight-color:transparent]"
    >
      <div>
        <div
          aria-hidden="true"
          className="mb-5 flex h-12 w-12 items-center justify-center
          rounded-xl border border-white/20
          bg-white/10 text-sand shadow-inner
          sm:h-14 sm:w-14"
        >
          <IconComponent className="h-6 w-6 text-sand" />
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-sand mb-2.5">
          {product.title}
        </h3>

        <p className="font-medium leading-relaxed text-sand/80 line-clamp-3">
          {product.description}
        </p>
      </div>

      <button
        type="button"
        onClick={handleApply}
        aria-label={`Apply for ${product.title}`}
        className="mt-6 flex w-full items-center justify-between
        border-t border-white/15 pt-5 cursor-pointer group/btn focus:outline-none text-left"
      >
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-sand/90 transition-colors duration-200 group-hover/btn:text-white">
          Apply Now
        </span>
        <div
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sand transition-all duration-300 group-hover/btn:bg-sand group-hover/btn:text-cyprus"
        >
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </button>
    </article>
  );
}
