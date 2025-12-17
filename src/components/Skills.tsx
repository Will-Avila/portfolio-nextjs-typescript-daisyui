"use client";

import SkillsItem from "./SkillsItem";
import skillCards from "@/data/skillCards";
import { motion } from "framer-motion";

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
            {skillCards.map((card) => (
                <motion.div key={card.id} variants={item}>
                    <SkillsItem
                        urlImage={card.urlImage}
                        alt={card.alt}
                        title={card.title}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}
