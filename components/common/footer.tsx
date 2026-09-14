// components/layout/footer.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "../common/container";
import { Phone, Mail, Globe } from "lucide-react";

const allLoans = [
  { name: "Cash Credit Limit", value: "cash-credit" },
  { name: "Over Draft Limit", value: "overdraft" },
  { name: "Home Loan", value: "home-loan" },
  { name: "Personal Loan", value: "personal-loan" },
  { name: "Business Loan", value: "business-loan" },
  { name: "View All", value: "#products" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleLoanClick = (loanValue: string) => {
    if (loanValue === "#products") {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    window.dispatchEvent(
      new CustomEvent("select-loan-type", { detail: loanValue }),
    );
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-background text-cyprus pb-12 relative z-30 overflow-hidden">
      <Container>
        {/* Newsletter Banner Box */}
        <div className="relative mb-20 overflow-hidden rounded-[2.5rem] bg-cyprus px-6 py-12 sm:px-12 sm:py-14 text-sand shadow-2xl">
          {/* Subtle decorative glow */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-sand">
              Subscribe to our newsletter to get updates on our latest financial
              solutions
            </h3>
            <p className="text-sm font-medium text-sand/80">
              Get special expert insights and financial tips just by subscribing
              to our newsletter.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <div className="relative w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-13 w-full rounded-full bg-white/10 border border-white/20 px-6 text-sm text-sand placeholder:text-sand/50 outline-none focus:border-white transition-all backdrop-blur-sm"
                />
              </div>
              <button
                type="submit"
                className="h-13 w-full sm:w-auto px-8 rounded-full bg-sand text-cyprus text-sm font-bold tracking-wide hover:bg-sand/90 transition-all shadow-md shrink-0 cursor-pointer"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>

            <p className="text-[11px] text-sand/60 mt-3">
              You will be able to unsubscribe at any time. Read our{" "}
              <a href="#" className="underline hover:text-sand">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Main Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand & Social Column */}
          <div className="lg:col-span-3 space-y-5">
            <span className="font-serif text-2xl font-bold tracking-tight text-cyprus block">
              Trustified Loans
            </span>
            <p className="text-sm text-muted max-w-sm leading-relaxed font-medium">
              A modern loan and financial solutions platform helping individuals
              and businesses navigate financing options with expert guidance and
              a simplified process.
            </p>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <p className="font-serif text-base font-bold text-cyprus mb-5">
              Company
            </p>
            <ul className="space-y-3 text-sm font-medium text-muted">
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
                  href="#products"
                  className="hover:text-cyprus transition-colors"
                >
                  Services
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
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-cyprus transition-colors"
                >
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-2">
            <p className="font-serif text-base font-bold text-cyprus mb-5">
              Support
            </p>
            <ul className="space-y-3 text-sm font-medium text-muted">
              <li>
                <Link
                  href="#contact"
                  className="hover:text-cyprus transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-cyprus transition-colors"
                >
                  Expert Advice
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-cyprus transition-colors"
                >
                  Webians
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-cyprus transition-colors"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Loan Solutions (Links) Column */}
          <div className="lg:col-span-2">
            <p className="font-serif text-base font-bold text-cyprus mb-5">
              Solutions
            </p>
            <ul className="space-y-3 text-sm font-medium text-muted">
              {allLoans.map((loan) => (
                <li key={loan.value}>
                  <button
                    onClick={() => handleLoanClick(loan.value)}
                    className={`hover:text-cyprus transition-colors text-left cursor-pointer ${loan.value === "#products" ? "font-bold text-cyprus underline underline-offset-4" : ""}`}
                  >
                    {loan.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-serif text-base font-bold text-cyprus mb-5">
              Contact Us
            </p>
            <div className="space-y-3 text-sm font-medium text-muted">
              <a
                href="tel:+919990533555"
                className="flex items-center gap-3 hover:text-cyprus transition-colors"
              >
                <div className="h-8 w-8 rounded-lg bg-cyprus/5 flex items-center justify-center text-cyprus shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+91 99905 33555</span>
              </a>
              <a
                href="mailto:support@trustifiedloans.com"
                className="flex items-center gap-3 hover:text-cyprus transition-colors"
              >
                <div className="h-8 w-8 rounded-lg bg-cyprus/5 flex items-center justify-center text-cyprus shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="truncate">support@trustifiedloans.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted font-medium gap-4">
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
