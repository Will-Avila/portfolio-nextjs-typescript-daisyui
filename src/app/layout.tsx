import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Will Avila | Desenvolvedor Web | Portfólio Premium",
  description:
    "Portfólio de Will Avila - Desenvolvedor Web especializado em criar experiências digitais modernas, de alta performance e visual impactante.",
  keywords: ["Desenvolvedor Web", "Vila Avila", "Front-end", "React", "Next.js", "TypeScript", "Portfolio", "Fortaleza", "Ceará", "Programador"],
  authors: [{ name: "Will Avila", url: "https://www.willavila.com.br" }],
  creator: "Will Avila",
  openGraph: {
    title: "Will Avila | Desenvolvedor Web",
    description: "Transformando ideias em experiências digitais premium.",
    type: "website",
    url: "https://www.willavila.com.br",
    locale: "pt_BR",
    siteName: "Will Avila Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="dark" className="scroll-smooth">
      <body className={`${outfit.className} antialiased bg-base-100 text-base-content overflow-x-hidden`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
