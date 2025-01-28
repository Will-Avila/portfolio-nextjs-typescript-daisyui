"use client";

import PortfolioCard from "./PortfolioCard";
import portfolioCards from "@/data/portfolioCards";
import Title from "./Title";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full bg-primary">
      <motion.div
        className="container-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="divider divider-accent max-w-96 mx-auto">
          <Title title="Portfólio" />
        </span>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-8">
          {portfolioCards.map((card) => (
            <PortfolioCard
              key={card.id}
              title={card.title}
              technologies={card.technologies}
              urlImage={card.urlImage}
              alt={card.alt}
              urlProject={card.urlProject}
              urlGithub={card.urlGithub}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
