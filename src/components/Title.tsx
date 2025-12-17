"use client";

import { motion } from "framer-motion";

interface TitleProps {
    title: string;
    subtitle?: string;
}

export default function Title({ title, subtitle }: TitleProps) {
    return (
        <div className="text-center mb-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
                <span className="text-gradient">{title}</span>
            </motion.h2>

            {/* Decorative Line */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto"
            />

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-neutral-content/60 mt-4 max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
