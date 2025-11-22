import HeroSection from "@/components/hero-section";
import Features from "@/components/features-2";
import Content from "@/components/content-4";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Faqs from "@/components/faqs-3";
import Image from "next/image";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Content />
      <Features />
      <Pricing />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
}
