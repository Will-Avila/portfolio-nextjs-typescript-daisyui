"use client"

import Skills from "./Skills";
import Title from "./Title";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section>
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="divider divider-accent max-w-96 mx-auto">
                        <Title title="Sobre Mim" />
                    </div>
                    <div className="pt-4 text-lg text-center">
                        <p><strong>Desenvolvedor Web</strong> com experiência em React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Bibliotecas UI, Wordpress com Elementor e consumo de APIs REST.</p>
                        <p>Apaixonado por desenvolver <strong>componentes reutilizáveis e eficientes.</strong></p>
                        <p><strong>Formado em Sistemas para Internet</strong> na Unicesumar e atualmente cursando desenvolvimento Full-Stack na B7Web.</p>
                    </div>
                </motion.div>
                <motion.div className="mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Title title="Habilidades" />
                    <Skills />
                </motion.div>
            </div>
        </section>
    )
}
