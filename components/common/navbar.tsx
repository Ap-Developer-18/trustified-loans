// components/home/navbar.tsx
"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  motion,
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
    <header className="fixed inset-x-0 top-0 z-50 pt-2 md:pt-3">
      <Container size="wide">
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(245, 241, 232, 0.88)"
              : "rgba(245, 241, 232, 0)",
            backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
            boxShadow: scrolled
              ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)"
              : "0 0 0 rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="rounded-3xl px-4 transition-all md:px-6"
        >
          <div className="flex items-center justify-between py-3 md:py-3.5">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-1"
            >
              <Image width={30} height={30} src={"/logo.svg"} alt="logo" />
              <span className="font-serif text-xl font-bold tracking-tight text-cyprus md:text-3xl">
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
                <motion.span
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
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </header>
  );
}
