"use client";

import Link from "next/link";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  technologies: string[];
  urlImage: string;
  alt: string;
  urlProject: string;
  urlGithub?: string;
}

export default function PortfolioCard({
  title,
  technologies,
  urlImage,
  alt,
  urlProject,
  urlGithub,
}: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden glass-card border border-white/5 hover:border-primary/30 transition-all duration-500"
    >
      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/50 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-80" />

        {/* Corner Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity z-10" />

        <img
          src={urlImage}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-20">
        {/* Title */}
        <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-base-100/80 border border-white/10 text-neutral-content/70 group-hover:border-primary/20 group-hover:text-neutral-content/90 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            href={urlProject}
            target="_blank"
            className="flex-1 btn btn-sm btn-primary rounded-xl gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
          >
            <FaExternalLinkAlt size={12} />
            Demo
          </Link>
          {urlGithub && (
            <Link
              href={urlGithub}
              target="_blank"
              className="flex-1 btn btn-sm glass rounded-xl gap-2 border-white/10 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              <FaCode size={14} />
              Código
            </Link>
          )}
        </div>
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}
