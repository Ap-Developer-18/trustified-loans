// components/home/product-grid.tsx
"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import LoanProductCard from "./loan-product-card";
import { loanProducts } from "@/data/loan-products";
import Container from "./common/container";
import SectionHeading from "./common/section-heading";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

export default function ProductGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  const totalSlides = loanProducts.length;

  return (
    <section
      className="
        relative z-10 overflow-hidden
        pt-20 sm:pt-24 text-cyprus
      "
      id="products"
    >
      {/* Soft Background Glow */}
      <div
        className="
          pointer-events-none absolute
          right-0 top-0 size-125
          rounded-full bg-white/5
          blur-[140px]
        "
      />

      <Container>
        <SectionHeading
          title="Loans for Every Need"
          subtitle="Whether you need a loan for your home, personal needs or business, we help you find the right option."
          theme="light"
        />

        {/* Scroll-triggered Entrance Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-md sm:max-w-lg pt-4 pb-8"
        >
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Navigation]}
            onSwiper={setSwiperRef}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            cardsEffect={{
              slideShadows: false,
              rotate: true,
              perSlideOffset: 12,
              perSlideRotate: 3,
            }}
            className="w-full max-w-[360px] sm:max-w-[420px] h-[460px]"
          >
            {loanProducts.map((product, index) => (
              <SwiperSlide
                key={product.title}
                className="rounded-3xl overflow-hidden shadow-2xl bg-[#003b35]"
              >
                <LoanProductCard product={product} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex mt-6 items-center justify-center w-full gap-5">
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="h-11 w-11 rounded-full border border-border/80 bg-surface text-cyprus flex items-center justify-center shadow-sm hover:bg-cyprus hover:text-sand hover:border-cyprus transition-all cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="font-serif text-lg font-bold tracking-wider text-cyprus">
              <span className="text-xl">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-muted/40 mx-2">/</span>
              <span className="text-muted/60">
                {String(totalSlides).padStart(2, "0")}
              </span>
            </div>
            <button
              onClick={() => swiperRef?.slideNext()}
              className="h-11 w-11 rounded-full border border-border/80 bg-surface text-cyprus flex items-center justify-center shadow-sm hover:bg-cyprus hover:text-sand hover:border-cyprus transition-all cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
