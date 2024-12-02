import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Will Avila | Desenvolvedor Web | Portfólio | Fortaleza-Ce",
  description: "Portfólio Will Avila - Desenvolvedor Web com habilidades em tecnologias modernas, criando soluções digitais inovadoras e responsivas"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="dark" className="scroll-smooth">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
