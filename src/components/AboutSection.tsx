"use client"

import Skills from "./Skills";
import Title from "./Title";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section>
            <div className="container mx-auto drop-shadow-md">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="divider divider-accent max-w-96 mx-auto">
                        <Title title="Sobre Mim" />
                    </div>
                    <div className=" flex flex-col gap-2 pt-4 text-lg text-left max-w-2xl mx-auto">
                        <p>- <strong>Desenvolvedor Web</strong> com conhecimentos em HTML, CSS, Javascript, SQL e NoSQL. Tenho mais habilidades em desenvolvimento front-end, uso de bibliotecas, frameworks, e consumo de APIs REST.</p>
                        <p>- Apaixonado por desenvolver <strong>componentes reutilizáveis e eficientes.</strong></p>
                        <p>- <strong>Graduado em Sistemas para Internet</strong> na Unicesumar e atualmente cursando desenvolvimento Full-Stack na B7Web.</p>
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
