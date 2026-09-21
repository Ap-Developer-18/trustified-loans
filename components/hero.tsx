"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Container from "./common/container";
import Button from "./common/button";

// 1. DYNAMIC IMPORTS: Lazy load the modal and form to slash initial JS payload
const Modal = dynamic(() => import("@/components/common/modal"), {
  ssr: false,
});
const ConsultationForm = dynamic(() => import("./consultation-form"), {
  ssr: false,
});

const WHATSAPP_NUMBER = "919990533555";
const WHATSAPP_MESSAGE =
  "Hi, I'd like to talk to an expert about loan options.";

export default function Hero() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState<string>("");

  useEffect(() => {
    const handleSelectLoan = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setSelectedLoan(customEvent.detail);
      setIsConsultationOpen(true);
    };

    window.addEventListener("select-loan-type", handleSelectLoan);
    return () =>
      window.removeEventListener("select-loan-type", handleSelectLoan);
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      // 🚀 SAFARI FIX: Removes the grey tap highlight on iOS for a native app feel
      className="relative overflow-hidden bg-background pt-28 sm:pt-32 md:pt-36 [-webkit-tap-highlight-color:transparent]"
    >
      <div className="pointer-events-none absolute left-1/2 top-[24%] h-105 w-190 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyprus/5 blur-[140px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10 mx-auto mb-8 max-w-5xl px-1 text-center sm:mb-12 sm:px-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyprus sm:mb-5 sm:text-xs md:text-xs"
          >
            Simple. Fast. Trusted.
          </motion.div>

          {/* ♿ ACCESSIBILITY: Linked to the section for semantic SEO */}
          <h1
            id="hero-heading"
            className="font-serif text-[2.35rem] font-bold leading-[1.08] tracking-tight text-cyprus sm:text-5xl md:text-6xl lg:text-[72px]"
          >
            Find the Right Loan
            <br className="hidden sm:block" />
            <span className="text-cyprus/90">For Your Needs.</span>
          </h1>

          <p className="mx-auto mt-4 font-medium leading-6 text-muted sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-7 md:text-lg md:leading-8">
            Home Loans, Personal Loans, Business Loans and more — we help you
            find the right loan with simple guidance and a hassle-free process.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row"
          >
            <Button
              onClick={() => {
                setSelectedLoan("");
                setIsConsultationOpen(true);
              }}
            >
              Apply Now
            </Button>

            <Button variant="light" onClick={handleWhatsAppClick}>
              Talk to an Expert
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mx-auto mt-4 max-w-75 text-[11px] font-medium leading-5 text-muted/80 sm:max-w-none sm:text-xs"
          >
            Get guidance on the loan option that suits your needs.
          </motion.p>
        </motion.div>

        {/* 🚀 LCP FIX: Removed motion.div. Animations on the LCP element block the main thread and destroy PageSpeed scores. */}
        <div className="relative mx-auto -mb-2 flex w-full max-w-6xl justify-center px-0 sm:px-4">
          <div className="relative w-full aspect-4/3 sm:aspect-16/10">
            <Image
              src="/hero-img.webp"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 90vw, 1024px"
              quality={70}
              alt="Trustified Loans - Loan consultation"
              className="object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </Container>

      {/* 3. CONDITIONAL RENDERING: Don't pollute the DOM until the user clicks */}
      {isConsultationOpen && (
        <Modal
          open={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        >
          <div className="mx-auto w-full max-w-xl">
            <ConsultationForm preselectedLoan={selectedLoan} />
          </div>
        </Modal>
      )}
    </section>
  );
}
