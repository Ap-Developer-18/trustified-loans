// components/home/about-us.tsx
"use client";

import { motion } from "framer-motion";
import Container from "./common/container";

const cardAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AboutUs() {
  return (
    <section
      className="relative scroll-mt-6 overflow-hidden bg-background pt-16 sm:pt-20 lg:pt-24"
      id="about"
    >
      <Container>
        {/* Section Heading */}
        <motion.div
          {...cardAnimation}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-6 max-w-2xl px-2 text-center sm:mb-10 sm:px-0"
        >
          <h2
            className="font-serif text-2xl font-bold leading-[1.1]
            tracking-tight text-cyprus
            sm:text-4xl md:text-5xl"
          >
            About Trustified Loans
          </h2>

          <p
            className="mx-auto mt-3 max-w-[320px]
            text-xs font-medium leading-5 text-muted
            sm:mt-4 sm:max-w-xl sm:text-base sm:leading-7"
          >
            We make finding and understanding the right loan simple. Our team is
            here to guide you from your first enquiry to the loan process.
          </p>
        </motion.div>

        {/* Bento Layout */}
        <div
          className="grid grid-cols-1 gap-3
          sm:gap-4
          lg:grid-cols-4 lg:items-stretch"
        >
          {/* Large Image - Mobile par compact height, desktop par bento span */}
          <motion.div
            {...cardAnimation}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="group relative aspect-4/3 lg:aspect-auto overflow-hidden
            rounded-[20px] bg-surface p-1 shadow-sm
            ring-1 ring-cyprus/5
            
            lg:col-span-1 lg:row-span-2 lg:min-h-[500px] lg:rounded-[24px]"
          >
            <img
              src="/about-us-one.webp"
              alt="Trustified Loans consultation"
              className="h-full w-full rounded-[16px] max-lg:object-top object-cover
              transition-transform duration-700
              group-hover:scale-[1.03]
              lg:rounded-[20px]"
            />

            {/* Image Overlay */}
            <div
              className="absolute inset-x-2.5 bottom-2.5 rounded-xl
              border border-white/10 bg-black/25 px-3 py-2
              backdrop-blur-md
              sm:inset-x-4 sm:bottom-4 sm:rounded-2xl sm:px-4 sm:py-3"
            >
              <p className="text-[10px] font-semibold text-white sm:text-xs">
                Here to help you make the right choice.
              </p>
            </div>
          </motion.div>

          {/* Simple Loan Process */}
          <motion.div
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="rounded-[20px] bg-surface p-4
            shadow-sm ring-1 ring-cyprus/5
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
            sm:p-6 sm:rounded-[24px]
            lg:col-span-1"
          >
            <div
              className="mb-3 flex h-8 w-8 items-center justify-center
              rounded-lg bg-cyprus/10 text-xs font-bold text-cyprus
              sm:mb-5 sm:h-10 sm:w-10 sm:rounded-2xl sm:text-sm"
            >
              01
            </div>

            <h3
              className="font-serif text-lg font-bold leading-tight
              text-cyprus sm:text-2xl"
            >
              Simple Loan Process
            </h3>

            <p
              className="mt-2 text-xs font-medium leading-5
              text-muted sm:mt-3 sm:text-sm sm:leading-6"
            >
              We make the loan process easy to understand and help you with the
              right loan option and required documents.
            </p>
          </motion.div>

          {/* Second Image */}
          <motion.div
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="group min-h-[180px] overflow-hidden
            rounded-[20px] bg-surface p-1 shadow-sm ring-1 ring-cyprus/5
            sm:min-h-[240px] sm:rounded-[24px]
            lg:col-span-1"
          >
            <img
              src="/about-us-two.webp"
              alt="Business and financial growth"
              className="h-full w-full rounded-[16px] object-cover
              transition-transform duration-700
              group-hover:scale-[1.03]
              lg:rounded-[20px]"
            />
          </motion.div>

          {/* Right Card */}
          <motion.div
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="rounded-[20px] bg-surface p-4
            shadow-sm ring-1 ring-cyprus/5
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
            sm:p-6 sm:rounded-[24px]
            lg:col-span-1"
          >
            <div
              className="mb-3 flex h-8 w-8 items-center justify-center
              rounded-lg bg-cyprus/10 text-xs font-bold text-cyprus
              sm:mb-5 sm:h-10 sm:w-10 sm:rounded-2xl sm:text-sm"
            >
              02
            </div>

            <h3
              className="font-serif text-lg font-bold leading-tight
              text-cyprus sm:text-2xl"
            >
              Right Loan Options
            </h3>

            <p className="mt-2 text-xs font-medium leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6">
              Whether you need a home, personal, business or property loan, we
              help you explore options based on your needs.
            </p>
          </motion.div>

          {/* Transparency */}
          <motion.div
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="rounded-[20px] bg-surface p-4
            shadow-sm ring-1 ring-cyprus/5
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
            sm:p-6 sm:rounded-[24px]
            lg:col-span-2"
          >
            <div
              className="flex flex-col gap-3
              sm:flex-row sm:items-start sm:gap-5"
            >
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center
                rounded-lg bg-cyprus/10 text-xs font-bold text-cyprus
                sm:h-10 sm:w-10 sm:rounded-2xl sm:text-sm"
              >
                03
              </div>

              <div>
                <h3
                  className="font-serif text-lg font-bold leading-tight
                  text-cyprus sm:text-2xl"
                >
                  Clear & Transparent
                </h3>

                <p
                  className="mt-2 max-w-2xl text-xs font-medium
                  leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6"
                >
                  We explain the loan process, requirements and available
                  options clearly, so you can make your decision with
                  confidence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Support */}
          <motion.div
            {...cardAnimation}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="rounded-[20px] bg-cyprus p-4 shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
            sm:p-6 sm:rounded-[24px]
            lg:col-span-1"
          >
            <div
              className="mb-3 flex h-8 w-8 items-center justify-center
              rounded-lg bg-white/10 text-xs font-bold text-white
              sm:mb-5 sm:h-10 sm:w-10 sm:rounded-2xl sm:text-sm"
            >
              04
            </div>

            <h3
              className="font-serif text-lg font-bold leading-tight
              text-white sm:text-2xl"
            >
              Support at Every Step
            </h3>

            <p
              className="mt-2 text-xs font-medium leading-5
              text-white/75 sm:mt-3 sm:text-sm sm:leading-6"
            >
              From your first enquiry to the loan process, our team is here to
              guide and support you.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
