// components/home/navbar.tsx
"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
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
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu - Native smooth collapse/expand via grid/max-height or conditional classes */}
          <div
            id="mobile-menu"
            className={`overflow-hidden transition-all duration-200 ease-out lg:hidden ${
              menuOpen ? "max-h-96 pb-3 opacity-100" : "max-h-0 pb-0 opacity-0"
            }`}
          >
            <div className="rounded-2xl bg-surface p-4 border border-cyprus/10 shadow-lg">
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
          </div>
        </Container>
      </div>
    </header>
  );
}
