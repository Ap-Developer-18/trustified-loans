// components/home/hero-actions.tsx
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Button from "../common/button";

// Modal aur Form ko sirf tabhi load karein jab user actually click kare
const Modal = dynamic(() => import("@/components/common/modal"), {
  ssr: false,
});
const ConsultationForm = dynamic(() => import("../consultation-form"), {
  ssr: false,
});

const WHATSAPP_NUMBER = "919990533555";
const WHATSAPP_MESSAGE =
  "Hi, I'd like to talk to an expert about loan options.";

export default function HeroActions() {
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
    <>
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

      {/* Modal tabhi inject hoga jab user click karega */}
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
    </>
  );
}
