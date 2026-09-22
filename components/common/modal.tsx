// components/common/modal.tsx
"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  open,
  onClose,
  children,
  className = "",
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop with smooth CSS fade transition */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-cyprus/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal content with custom smooth bounce-in animation */}
      <div
        className={`relative w-fit max-h-[90vh] p-0! sm:p-0! overflow-y-auto animate-modal-bounce ${className}`}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-cyprus transition-colors hover:bg-black/10 cursor-pointer"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 നെയും 16 16" fill="none">
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
}
