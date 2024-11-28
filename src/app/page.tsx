"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <Header />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
