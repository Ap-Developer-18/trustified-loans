// app/page.tsx
import Navbar from "@/components/common/navbar";
import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import ProductGrid from "@/components/product-grid";
import WhyChooseUs from "@/components/why-choose-us";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/common/footer";

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <AboutUs />
      <ProductGrid />
      <WhyChooseUs />
      {/* <ContactSection /> */}
      <Footer />
    </>
  );
}
