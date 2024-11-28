import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ScrollTop from "@/components/ScrollTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Will Avila - Desenvolvedor Web com expertise em tecnologias modernas, criando soluções digitais inovadoras e responsivas"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="mytheme" className="scroll-smooth">
      <body className={montserrat.className}>
        {children}
        <ScrollTop />
      </body>
    </html>
  );
}
