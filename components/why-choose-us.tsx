// components/home/why-choose-us.tsx
"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Container from "./common/container";
import SectionHeading from "./common/section-heading";
import { whyChooseUsBenefits } from "@/data/loan-products";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      // ♿ ACCESSIBILITY: Section ko proper label diya
      aria-label="Why Choose Trustified Loans"
      // 🚀 SAFARI FIX: Native feel on iOS
      className="relative scroll-mt-6 z-10 pt-20 sm:pt-24 [-webkit-tap-highlight-color:transparent]"
    >
      <Container>
        <SectionHeading
          title="Why Choose Trustified Loans?"
          subtitle="We make it easier to understand your loan options and guide you through the process with clear and reliable support."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
          {/* LEFT: Info list, center-aligned before lg, left-aligned on lg+ */}
          {/* 🚀 SEO FIX: Changed generic div to semantic ul */}
          <ul
            role="list"
            className="flex flex-col lg:py-4 justify-between m-0 p-0 list-none"
          >
            {whyChooseUsBenefits.map((item, index) => (
              <m.li
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="group flex flex-col items-center text-center border-b border-primary/10 py-4 first:pt-0 last:border-b-0 last:pb-0 lg:flex-row lg:items-start lg:text-left lg:gap-5"
              >
                <div
                  // ♿ Bots don't need to read the decorative circle number
                  aria-hidden="true"
                  className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/15 font-serif text-base font-bold text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white lg:mb-0"
                >
                  {item.number}
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold leading-tight text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-medium leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </m.li>
            ))}
          </ul>

          {/* RIGHT: Image, sets the height for the row */}
          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-full lg:sticky lg:top-24 lg:self-start"
          >
            <div className="relative h-full aspect-4/3 w-full overflow-hidden rounded-3xl shadow-lg shadow-primary/10">
              <Image
                src="/why-us.webp"
                alt="Trustified Loans expert guiding a customer"
                fill
                loading="lazy"
                className="object-cover h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient - hidden from screen readers */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent"
              />
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
