// components/home/loan-apply-button.tsx
"use client";

import { ArrowUpRight } from "lucide-react";

type LoanApplyButtonProps = {
  title: string;
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

export default function LoanApplyButton({ title }: LoanApplyButtonProps) {
  const handleApply = (e: React.MouseEvent) => {
    e.preventDefault();
    const formValue = loanValueMap[title] || "";

    window.dispatchEvent(
      new CustomEvent("select-loan-type", { detail: formValue }),
    );
  };

  return (
    <button
      type="button"
      onClick={handleApply}
      aria-label={`Apply for ${title}`}
      className="mt-6 flex w-full items-center justify-between border-t border-white/15 pt-5 cursor-pointer group/btn focus:outline-none text-left"
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
  );
}
