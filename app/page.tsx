import Navbar from "@/components/common/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/common/footer";
import AboutUs from "@/components/about-us";
import ProductGrid from "@/components/product-grid";
import ContactSection from "@/components/contact-section";
import WhyChooseUs from "@/components/why-choose-us";

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
