// components/home/navbar.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "../common/container";
import Button from "../common/button";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-sand/90 py-3 shadow-sm backdrop-blur-md"
            : "bg-transparent py-5"
        }
      `}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2.5"
          >
            <span
              className="
                font-serif text-xl font-bold
                tracking-tight text-cyprus
                md:text-4xl
              "
            >
              Trustified Loans
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="
              hidden items-center gap-1
              rounded-full
              bg-surface/70
              px-2 py-1.5
              shadow-sm
              backdrop-blur-md
              md:flex
            "
          >
            <Link
              href="/"
              className="
                rounded-full px-4 py-2
                 font-bold
                text-cyprus/75
                transition-all duration-200
                hover:bg-cyprus/5
                hover:text-cyprus
              "
            >
              Home
            </Link>

            <Link
              href="#about"
              className="
                rounded-full px-4 py-2
                 font-bold
                text-cyprus/75
                transition-all duration-200
                hover:bg-cyprus/5
                hover:text-cyprus
              "
            >
              About Us
            </Link>

            <Link
              href="#products"
              className="
                rounded-full px-4 py-2
                 font-bold
                text-cyprus/75
                transition-all duration-200
                hover:bg-cyprus/5
                hover:text-cyprus
              "
            >
              Loans
            </Link>

            <Link
              href="#why-us"
              className="
                rounded-full px-4 py-2
                 font-bold
                text-cyprus/75
                transition-all duration-200
                hover:bg-cyprus/5
                hover:text-cyprus
              "
            >
              Why Us
            </Link>

            <Link
              href="#contact"
              className="
                rounded-full px-4 py-2
                 font-bold
                text-cyprus/75
                transition-all duration-200
                hover:bg-cyprus/5
                hover:text-cyprus
              "
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center md:flex">
            <Button
              variant="primary"
              size="md"
              onClick={scrollToContact}
              className="
                flex items-center gap-1.5
                rounded-full px-5
                 font-bold
                shadow-sm
              "
            >
              <span>Apply Now</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl bg-surface
              text-cyprus shadow-sm
              transition-all duration-200
              hover:bg-surface/80
              md:hidden
            "
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="
              mt-3 overflow-hidden
              rounded-3xl bg-surface
              p-4 shadow-xl
              md:hidden
            "
          >
            <nav className="flex flex-col">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="
                  rounded-2xl px-4 py-3.5
                   font-semibold
                  text-cyprus
                  transition-colors
                  hover:bg-background
                "
              >
                Home
              </Link>

              <Link
                href="#about"
                onClick={closeMobileMenu}
                className="
                  rounded-2xl px-4 py-3.5
                   font-semibold
                  text-cyprus
                  transition-colors
                  hover:bg-background
                "
              >
                About Us
              </Link>

              <Link
                href="#products"
                onClick={closeMobileMenu}
                className="
                  rounded-2xl px-4 py-3.5
                   font-semibold
                  text-cyprus
                  transition-colors
                  hover:bg-background
                "
              >
                Loans
              </Link>

              <Link
                href="#why-us"
                onClick={closeMobileMenu}
                className="
                  rounded-2xl px-4 py-3.5
                   font-semibold
                  text-cyprus
                  transition-colors
                  hover:bg-background
                "
              >
                Why Us
              </Link>

              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className="
                  rounded-2xl px-4 py-3.5
                   font-semibold
                  text-cyprus
                  transition-colors
                  hover:bg-background
                "
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile CTA */}
            <div className="mt-2 pt-2">
              <Button
                variant="primary"
                size="sm"
                onClick={scrollToContact}
                className="w-full rounded-2xl py-3.5"
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
