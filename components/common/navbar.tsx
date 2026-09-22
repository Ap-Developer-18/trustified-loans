// components/home/navbar.tsx
"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  m,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Container from "../common/container";
import Button from "../common/button";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Loans", href: "#loans" },
  { label: "Why Us", href: "#why-us" },
] as const;

const desktopLinkClass = `
  rounded-full px-4 py-2 
  font-bold text-cyprus/75 
  transition-colors duration-200 
  hover:bg-cyprus/5 hover:text-cyprus
`;

const mobileLinkClass = `
  rounded-2xl px-4 py-3.5
  font-semibold text-cyprus 
  transition-colors 
  hover:bg-background
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* 
        🚀 PERFORMANCE FIX (PageSpeed Insights): 
        Removed Framer Motion for box-shadow/backdrop-filter. 
        Native CSS transitions are composited by the GPU, fixing the CLS/Animation warning.
        UI values are EXACTLY the same.
      */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-[rgba(245,241,232,0.88)] backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
            : "bg-transparent backdrop-blur-none shadow-none"
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between py-3 md:py-3.5">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-1"
              aria-label="Trustified Loans Home"
            >
              {/* 🚀 LCP & ACCESSIBILITY: priority added for instant load, and descriptive alt text */}
              <Image
                width={40}
                height={40}
                src="/logo.svg"
                alt="Trustified Loans Logo"
                priority
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-cyprus md:text-3xl">
                Trustified Loans
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 rounded-full bg-surface/80 px-2.5 py-1.5 shadow-sm border border-cyprus/5 lg:flex">
              {NAV_LINKS.map(({ label, href }) => (
                <Link key={href} href={href} className={desktopLinkClass}>
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Button
                variant="primary"
                size="md"
                onClick={scrollToContact}
                className="flex items-center gap-1.5 rounded-full px-5 font-bold shadow-sm"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-cyprus shadow-sm border border-cyprus/5 transition-colors hover:bg-surface/80 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <m.span
                  key={menuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.18 }}
                >
                  {menuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </m.span>
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence initial={false}>
            {menuOpen && (
              <m.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden lg:hidden pb-3"
              >
                <div className="rounded-2xl bg-surface p-4 border border-cyprus/10">
                  <nav className="flex flex-col">
                    {NAV_LINKS.map(({ label, href }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeMenu}
                        className={mobileLinkClass}
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-2 pt-2 border-t border-cyprus/5">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={scrollToContact}
                      className="w-full rounded-xl py-3.5"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </Container>
      </div>
    </header>
  );
}
