// components/home/loan-product-card.tsx
// 🚀 PURE SERVER COMPONENT (Card ka HTML seedha server se render hoga)

import { LoanProduct } from "@/types/loan";
import LoanApplyButton from "./client/loan-apply-button";

type LoanProductCardProps = {
  product: LoanProduct;
  index: number;
};

export default function LoanProductCard({ product }: LoanProductCardProps) {
  const IconComponent = product.icon;

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

      {/* 🚀 Client Interactivity sirf button mein hai */}
      <LoanApplyButton title={product.title} />
    </article>
  );
}
