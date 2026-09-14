// components/home/why-choose-us.tsx
"use client";

import { motion } from "framer-motion";
import Container from "./common/container";
import SectionHeading from "./common/section-heading";
import { whyChooseUsBenefits } from "@/data/loan-products";

export default function WhyChooseUs() {
  return (
    <section className="relative z-10 bg-background pt-24" id="why-us">
      <Container>
        <SectionHeading
          title="Why Choose Trustified Loans?"
          subtitle="We make it easier to understand your loan options and guide you through the process with clear and reliable support."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {whyChooseUsBenefits.map((item, index) => {
            const isHighlight = index === 3;

            const placement =
              index === 0
                ? "lg:col-start-1 lg:row-start-1 lg:row-span-2"
                : index === 1
                  ? "lg:col-start-2 lg:row-start-1"
                  : index === 2
                    ? "lg:col-start-2 lg:row-start-2 lg:col-span-1"
                    : "lg:col-start-3 lg:row-start-1 lg:row-span-2";

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className={`group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1.5 sm:min-h-70 sm:p-6 lg:min-h-0 ${placement} ${
                  isHighlight
                    ? "bg-primary text-white shadow-lg shadow-cyprus/10"
                    : "bg-surface text-primary shadow-sm hover:shadow-md"
                }`}
              >
                {isHighlight && (
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.06] blur-3xl" />
                )}

                <div className="relative">
                  <span
                    className={`mb-5 block font-serif text-3xl font-bold transition-colors duration-300 ${
                      isHighlight
                        ? "text-white/45 group-hover:text-white/60"
                        : "text-primary/15 group-hover:text-primary/30"
                    }`}
                  >
                    {item.number}
                  </span>

                  <h3
                    className={`font-serif text-xl font-bold leading-tight ${
                      isHighlight ? "text-white" : "text-primary"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm font-medium leading-6 ${
                      isHighlight ? "text-white/65" : "text-muted"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  className={`relative mt-8 h-1 w-8 rounded-full transition-all duration-300 group-hover:w-12 ${
                    isHighlight ? "bg-white/30" : "bg-primary/10"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
