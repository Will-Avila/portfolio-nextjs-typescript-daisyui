"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioSection from "@/components/PortfolioSection";
import ScrollTop from "@/components/ScrollTop";

export default function Home() {
  return (
    <main className="flex h-screen flex-col text-neutral">
      <Header />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <ScrollTop />
    </main>
  );
}
