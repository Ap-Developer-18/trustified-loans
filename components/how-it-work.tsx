// components/home/why-choose-us.tsx

"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sliders, Eye, Headphones } from "lucide-react";
import Container from "./common/container";
import SectionHeading from "./common/section-heading";

const benefits = [
  {
    number: "01",
    title: "Expert Guidance",
    desc: "Get clear guidance from your first enquiry through the loan process.",
    icon: <Headphones className="h-5 w-5" />,
  },
  {
    number: "02",
    title: "Multiple Loan Options",
    desc: "Explore different loan options based on your personal or business needs.",
    icon: <Sliders className="h-5 w-5" />,
  },
  {
    number: "03",
    title: "Clear & Transparent",
    desc: "We explain the process, requirements and available options clearly, so you can make your decision with confidence.",
    icon: <Eye className="h-5 w-5" />,
  },
  {
    number: "04",
    title: "Support at Every Step",
    desc: "From your first enquiry to the loan process, our team is here to guide and support you.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const cardAnimation = {
  initial: {
    opacity: 0,
    y: 18,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
  },
};

export default function WhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden bg-background py-20 sm:py-24"
      id="why-us"
    >
      <Container>
        {/* Heading */}
        <SectionHeading
          title="Why Choose Trustified Loans?"
          subtitle="We make the loan process simple, clear and easy to understand."
        />

        {/* Bento Grid */}
        <div
          className="
            mt-10
            grid grid-cols-1 gap-4
            sm:grid-cols-2
            lg:min-h-125
            lg:grid-cols-4
            lg:grid-rows-2
          "
        >
          {/* =========================
              01 — LEFT TALL CARD
          ========================== */}
          <motion.div
            {...cardAnimation}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="
              group flex min-h-64
              flex-col justify-between
              rounded-3xl
              bg-surface
              p-5
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:min-h-70
              sm:p-6
              lg:row-span-2
            "
          >
            <div>
              {/* Number */}
              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  bg-background
                  text-sm font-bold
                  text-cyprus
                  shadow-sm
                "
              >
                {benefits[0].number}
              </div>

              {/* Icon */}
              <div
                className="
                  mt-10 flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-cyprus/5
                  text-cyprus
                  transition-transform duration-300
                  group-hover:scale-105
                "
              >
                {benefits[0].icon}
              </div>

              <h3
                className="
                  mt-5
                  max-w-55
                  font-serif
                  text-2xl font-bold
                  leading-tight
                  text-cyprus
                "
              >
                {benefits[0].title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-60
                  text-sm font-medium
                  leading-6
                  text-muted
                "
              >
                {benefits[0].desc}
              </p>
            </div>

            <div
              className="
                h-1 w-10
                rounded-full
                bg-cyprus/10
                transition-all duration-300
                group-hover:w-16
                group-hover:bg-cyprus/20
              "
            />
          </motion.div>

          {/* =========================
              02 — TOP MIDDLE
          ========================== */}
          <motion.div
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0.05,
              ease: "easeOut",
            }}
            className="
              group flex min-h-64
              flex-col justify-between
              rounded-3xl
              bg-surface
              p-5
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:min-h-70
              sm:p-6
              lg:min-h-0
              lg:col-span-1
              lg:row-start-1
            "
          >
            <div>
              {/* Number */}
              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  bg-background
                  text-sm font-bold
                  text-cyprus
                  shadow-sm
                "
              >
                {benefits[1].number}
              </div>

              <h3
                className="
                  mt-8
                  font-serif
                  text-xl font-bold
                  leading-tight
                  text-cyprus
                  sm:text-2xl
                "
              >
                {benefits[1].title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm font-medium
                  leading-6
                  text-muted
                "
              >
                {benefits[1].desc}
              </p>
            </div>

            <div
              className="
                h-1 w-10
                rounded-full
                bg-cyprus/10
                transition-all duration-300
                group-hover:w-16
                group-hover:bg-cyprus/20
              "
            />
          </motion.div>

          {/* =========================
              03 — BOTTOM WIDE CARD
          ========================== */}
          <motion.div
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              group flex min-h-64
              flex-col justify-between
              rounded-3xl
              bg-surface
              p-5
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:min-h-70
              sm:p-6
              lg:min-h-0
              lg:col-span-2
              lg:row-start-2
            "
          >
            <div>
              {/* Number */}
              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  bg-background
                  text-sm font-bold
                  text-cyprus
                  shadow-sm
                "
              >
                {benefits[2].number}
              </div>

              <div
                className="
                  mt-6
                  flex flex-col gap-4
                  sm:flex-row sm:items-start
                  sm:gap-8
                "
              >
                <h3
                  className="
                    shrink-0
                    font-serif
                    text-xl font-bold
                    leading-tight
                    text-cyprus
                    sm:text-2xl
                  "
                >
                  {benefits[2].title}
                </h3>

                <p
                  className="
                    max-w-xl
                    text-sm font-medium
                    leading-6
                    text-muted
                  "
                >
                  {benefits[2].desc}
                </p>
              </div>
            </div>

            <div
              className="
                h-1 w-10
                rounded-full
                bg-cyprus/10
                transition-all duration-300
                group-hover:w-16
                group-hover:bg-cyprus/20
              "
            />
          </motion.div>

          {/* =========================
              04 — RIGHT TALL CARD
          ========================== */}
          <motion.div
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              group flex min-h-64
              flex-col justify-between
              rounded-3xl
              bg-[#004741]
              p-5
              text-white
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:min-h-70
              sm:p-6
              lg:min-h-0
              lg:col-start-4
              lg:row-span-2
              lg:row-start-1
            "
          >
            <div>
              {/* Number */}
              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  bg-white/10
                  text-sm font-bold
                  text-white
                "
              >
                {benefits[3].number}
              </div>

              {/* Icon */}
              <div
                className="
                  mt-10 flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-white/10
                  text-white
                  transition-transform duration-300
                  group-hover:scale-105
                "
              >
                {benefits[3].icon}
              </div>

              <h3
                className="
                  mt-5
                  font-serif
                  text-2xl font-bold
                  leading-tight
                  text-white
                "
              >
                {benefits[3].title}
              </h3>

              <p
                className="
                  mt-4
                  text-sm font-medium
                  leading-6
                  text-white/70
                "
              >
                {benefits[3].desc}
              </p>
            </div>

            <div
              className="
                h-1 w-10
                rounded-full
                bg-white/20
                transition-all duration-300
                group-hover:w-16
                group-hover:bg-white/30
              "
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
