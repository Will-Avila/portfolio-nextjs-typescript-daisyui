"use client";

import { motion } from "framer-motion";

interface SkillsItemProps {
    urlImage: string;
    alt: string;
    title: string;
}

export default function SkillsItem({ urlImage, alt, title }: SkillsItemProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative flex flex-col items-center gap-3 p-4 rounded-xl glass-card border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-default"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <div className="relative w-12 h-12 flex items-center justify-center">
                <img
                    src={urlImage}
                    alt={alt}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Title */}
            <span className="text-sm font-medium text-neutral-content/70 group-hover:text-base-content transition-colors">
                {title}
            </span>
        </motion.div>
    );
}
