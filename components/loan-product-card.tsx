// components/home/loan-product-card.tsx
"use client";

import { ArrowUpRight } from "lucide-react";
import { LoanProduct } from "@/types/loan";

type LoanProductCardProps = {
  product: LoanProduct;
  index: number;
};

export default function LoanProductCard({ product }: LoanProductCardProps) {
  const IconComponent = product.icon;

  const handleApply = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    window.dispatchEvent(
      new CustomEvent("select-loan-type", {
        detail: product.title.toLowerCase().replace(/\s+/g, "-"),
      }),
    );
  };

  return (
    <div
      className="group flex h-full w-full flex-col justify-between
      rounded-3xl border border-white/20
      bg-[#003f38] p-8
      shadow-2xl transition-all duration-300
      select-none"
    >
      {/* Top Content */}
      <div>
        {/* Icon */}
        <div
          className="mb-6 flex h-14 w-14 items-center justify-center
          rounded-2xl border border-white/20
          bg-white/10 text-sand shadow-inner
          sm:h-16 sm:w-16"
        >
          <IconComponent className="h-7 w-7 text-sand" />
        </div>

        {/* Title */}
        <h3
          className="font-serif text-2xl font-bold leading-tight
          text-sand mb-3"
        >
          {product.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm font-medium leading-relaxed
          text-sand/80"
        >
          {product.description}
        </p>
      </div>

      {/* CTA */}
      <div
        className="mt-auto flex items-center justify-between
        border-t border-white/15 pt-6"
      >
        <button
          onClick={handleApply}
          className="text-xs font-bold uppercase
          tracking-[0.14em] text-sand/90
          transition-colors duration-200
          hover:text-white cursor-pointer"
        >
          Apply Now
        </button>

        <div
          className="flex h-10 w-10 items-center justify-center
          rounded-full bg-white/20
          text-sand
          transition-all duration-300
          group-hover:bg-sand
          group-hover:text-cyprus"
        >
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
