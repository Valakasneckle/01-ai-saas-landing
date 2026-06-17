import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import Pricing from "@/components/sections/Pricing";
import ProductPreview from "@/components/sections/ProductPreview";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <ProductPreview />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
