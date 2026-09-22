import dynamic from "next/dynamic";
import Navbar from "@/components/common/navbar";
import Hero from "@/components/hero";
const AboutUs = dynamic(() => import("@/components/about-us"));
const ProductGrid = dynamic(() => import("@/components/product-grid"));
const WhyChooseUs = dynamic(() => import("@/components/why-choose-us"));
const ContactSection = dynamic(() => import("@/components/contact-section"));
const Footer = dynamic(() => import("@/components/common/footer"));

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <ProductGrid />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </>
  );
}
