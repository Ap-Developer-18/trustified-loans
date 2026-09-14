// components/home/final-cta.tsx

import Container from "./common/container";
import Button from "./common/button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-background">
      <Container
        className="
          relative z-10
          my-14 overflow-hidden
          rounded-[2rem]
          bg-cyprus
          px-6 py-10
          text-center text-sand
          shadow-[0_25px_60px_-25px_rgba(0,71,65,0.22)]
          sm:my-16
          sm:rounded-[2.25rem]
          sm:px-10 sm:py-12
          md:px-16 md:py-14
        "
      >
        {/* Soft Glow */}
        <div
          className="
            pointer-events-none absolute
            -right-24 -top-24
            h-64 w-64
            rounded-full
            bg-white/[0.04]
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none absolute
            -bottom-28 -left-24
            h-64 w-64
            rounded-full
            bg-[#82CBEA]/[0.05]
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Label */}
          <span
            className="
              block text-[10px] font-bold
              uppercase tracking-[0.18em]
              text-[#82CBEA]
              sm:text-xs
            "
          >
            Get Started Today
          </span>

          {/* Heading */}
          <h2
            className="
              mx-auto mt-3
              max-w-2xl
              font-serif
              text-2xl font-bold
              leading-[1.12]
              tracking-tight
              sm:mt-4
              sm:text-4xl
              md:text-[46px]
            "
          >
            Let&apos;s Find the Right Financing for You.
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-4
              max-w-xl
              text-sm font-medium
              leading-6
              text-sand/70
              sm:mt-5
              sm:text-base
              sm:leading-7
            "
          >
            Tell us what you need and our team will help you understand your
            financing options and choose the right way forward.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-6 flex
              flex-col items-center
              justify-center gap-3
              sm:mt-7
              sm:flex-row
            "
          >
            <Button
              variant="light"
              size="md"
              className="
                w-full rounded-xl
                px-6 py-3.5
                text-sm
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5
                sm:w-auto
              "
            >
              Talk To An Expert →
            </Button>

            <Button
              variant="secondary"
              size="md"
              className="
                w-full rounded-xl
                bg-white/[0.08]
                px-6 py-3.5
                text-sm text-sand
                shadow-none
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-white/[0.14]
                sm:w-auto
              "
            >
              Explore Solutions
            </Button>
          </div>

          {/* Small Text */}
          <p
            className="
              mt-4
              text-[10px]
              font-medium
              text-sand/35
              sm:text-[11px]
            "
          >
            Simple guidance. Clear options. Support when you need it.
          </p>
        </div>
      </Container>
    </section>
  );
}
