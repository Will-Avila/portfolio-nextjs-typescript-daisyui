"use client";

import PortfolioCard from "./PortfolioCard";
import portfolioCards from "@/data/portfolioCards";
import Title from "./Title";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative bg-base-100 py-20 md:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Blobs */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 blur-[120px] pointer-events-none" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container-xl mx-auto px-5 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title
            title="Projetos Recentes"
            subtitle="Uma seleção dos meus melhores trabalhos, onde aplico tecnologias modernas para resolver problemas reais."
          />
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PortfolioCard
                title={card.title}
                technologies={card.technologies}
                urlImage={card.urlImage}
                alt={card.alt}
                urlProject={card.urlProject}
                urlGithub={card.urlGithub}
              />
            </motion.div>
          ))}
        </div>

        {/* View More CTA (Optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Will-Avila"
            target="_blank"
            className="inline-flex items-center gap-2 text-neutral-content/60 hover:text-primary transition-colors group"
          >
            Ver mais no GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
