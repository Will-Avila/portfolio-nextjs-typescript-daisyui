"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioSection from "@/components/PortfolioSection";
import ScrollTop from "@/components/ScrollTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-neutral-content">
      <Navbar />
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <ScrollTop />
    </main>
  );
}
