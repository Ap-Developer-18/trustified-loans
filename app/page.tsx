import Navbar from "@/components/common/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/common/footer";
import TrustStrip from "@/components/trust-strip";
import AboutUs from "@/components/about-us";
import ProductGrid from "@/components/product-grid";
import FinalCTA from "@/components/final-cta";
import ContactSection from "@/components/contact-section";
import WhyChooseUs from "@/components/why-choose-us";
import HowItWorks from "@/components/how-it-work";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <ProductGrid />
        {/* <WhyChooseUs /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
