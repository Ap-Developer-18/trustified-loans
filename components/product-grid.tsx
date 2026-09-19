// components/home/product-grid.tsx
"use client";

import Container from "./common/container";
import SectionHeading from "./common/section-heading";
import LoanProductCard from "./loan-product-card";
import { loanProducts } from "@/data/loan-products";

export default function ProductGrid() {
  return (
    <section id="loans" className="relative scroll-mt-6 pt-20 sm:pt-24">
      <Container>
        <SectionHeading
          title="Loans for Every Need"
          subtitle="Whether you need a loan for your home, personal needs or business, we help you find the right option."
          align="center"
          theme="light"
        />
        {/* Grid — 4 per row, last incomplete row auto-centers */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {loanProducts.map((product, index) => (
            <div
              key={product.title}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <LoanProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
