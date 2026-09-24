"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Container from "./common/container";
import Button from "./common/button";

// Form aur Modal ko background mein lazy load kar rahe hain taaki main thread block na ho
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
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background pt-28 sm:pt-32 md:pt-36 [-webkit-tap-highlight-color:transparent]"
    >
      {/* 🔥 FIX: Heavy blur-[140px] ko hata kar lightweight radial-gradient laga diya hai. 
          UI waisa hi dikhega, par ab browser kabhi hang nahi hoga. */}
      <div className="pointer-events-none absolute left-1/2 top-[24%] h-105 w-190 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyprus/10 via-cyprus/5 to-transparent" />

      <Container>
        <div className="relative z-10 mx-auto mb-8 max-w-5xl px-1 text-center sm:mb-12 sm:px-0">
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyprus sm:mb-5 sm:text-xs md:text-xs">
            Simple. Fast. Trusted.
          </div>

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

          {/* Action Buttons directly integrated */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
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
          </div>

          <p className="mx-auto mt-4 max-w-75 text-[11px] font-medium leading-5 text-muted/80 sm:max-w-none sm:text-xs">
            Get guidance on the loan option that suits your needs.
          </p>
        </div>

        {/* Hero Image (Uncommented and ready for display) */}
        <div className="relative mx-auto -mb-2 flex w-full max-w-6xl justify-center px-0 sm:px-4">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
            <Image
              src="/hero-img.webp"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 380px, (max-width: 1024px) 80vw, 1024px"
              alt="Trustified Loans - Loan consultation"
              className="object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </Container>

      {/* Modal renders conditionally */}
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
