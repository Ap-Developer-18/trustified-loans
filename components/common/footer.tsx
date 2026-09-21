// components/layout/footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Container from "../common/container";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

const allLoans = [
  { name: "Cash Credit Limit", value: "cash-credit" },
  { name: "Over Draft Limit", value: "overdraft" },
  { name: "Home Loan", value: "home-loan" },
  { name: "Personal Loan", value: "personal-loan" },
  { name: "Business Loan", value: "business-loan" },
  { name: "View All", value: "/#loans" },
];

export default function Footer() {
  const handleLoanClick = (loanValue: string) => {
    if (loanValue === "/#loans") {
      window.location.href = loanValue;
      return;
    }

    window.dispatchEvent(
      new CustomEvent("select-loan-type", { detail: loanValue }),
    );
  };

  return (
    <footer
      // 🚀 SAFARI FIX: Removes grey tap flash on iOS for all footer links/buttons
      className="bg-background text-cyprus pt-20 sm:pt-24 pb-6 lg:pb-12 relative z-30 overflow-hidden [-webkit-tap-highlight-color:transparent]"
    >
      <Container className="">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-6 mb-16">
          <div className="col-span-2 md:col-span-12 lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-1">
              {/* 🚀 SEO & ACCESSIBILITY: Descriptive alt text */}
              <Image
                width={40}
                height={40}
                src={"/logo.svg"}
                alt="Trustified Loans Logo"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-cyprus md:text-3xl">
                Trustified Loans
              </span>
            </Link>
            <p className=" text-muted lg:max-w-sm leading-relaxed font-medium">
              A modern loan and financial solutions platform helping individuals
              and businesses navigate financing options with expert guidance and
              a simplified process.
            </p>
          </div>

          {/* Company Column */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2">
            <p className="font-serif text-xl font-bold text-cyprus mb-5">
              Company
            </p>
            {/* ♿ ACCESSIBILITY: Labeled list for screen readers */}
            <ul
              aria-label="Company Links"
              className="space-y-3 font-medium text-muted"
            >
              <li>
                <Link
                  href="#about"
                  className="hover:text-cyprus transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#loans"
                  className="hover:text-cyprus transition-colors"
                >
                  Loans
                </Link>
              </li>
              <li>
                <Link
                  href="#why-us"
                  className="hover:text-cyprus transition-colors"
                >
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Loan Solutions (Links) Column */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2">
            <p className="font-serif text-xl font-bold text-cyprus mb-5">
              Solutions
            </p>
            {/* ♿ ACCESSIBILITY: Labeled list for screen readers */}
            <ul
              aria-label="Loan Solutions"
              className="space-y-3 font-medium text-muted"
            >
              {allLoans.map((loan) => (
                <li key={loan.value}>
                  <button
                    type="button"
                    onClick={() => handleLoanClick(loan.value)}
                    className={`hover:text-cyprus transition-colors text-left cursor-pointer ${
                      loan.value === "/#loans"
                        ? "font-bold text-cyprus underline underline-offset-4"
                        : ""
                    }`}
                  >
                    {loan.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 space-y-4">
            <p className="font-serif text-xl font-bold text-cyprus mb-5">
              Contact Us
            </p>
            <div className="space-y-3 font-medium text-muted">
              <a
                href="tel:+919990533555"
                className="flex items-center gap-3 hover:text-cyprus transition-colors"
              >
                <div className="h-8 w-8 rounded-lg bg-cyprus/5 flex items-center justify-center text-cyprus shrink-0">
                  {/* ♿ ACCESSIBILITY: Hide decorative icons from screen readers */}
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="whitespace-nowrap">+91 99905 33555</span>
              </a>
              <a
                href="mailto:support@trustifiedloans.com"
                className="flex items-center gap-3 hover:text-cyprus transition-colors"
              >
                <div className="h-8 w-8 rounded-lg bg-cyprus/5 flex items-center justify-center text-cyprus shrink-0">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="wrap-break-words leading-tight">
                  support@trustifiedloans.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-6 lg:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted font-medium gap-4">
          <p>
            © {new Date().getFullYear()} Trustified Loans. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyprus transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyprus transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
