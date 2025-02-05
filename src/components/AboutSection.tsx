"use client";

import Skills from "./Skills";
import Title from "./Title";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section>
      <div className="container-xl mx-auto drop-shadow-md">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="divider divider-accent max-w-96 mx-auto">
            <Title title="Sobre Mim" />
          </div>
          <div className=" flex flex-col gap-4 pt-4 text-lg text-left mx-auto">
            <p>
              <strong>Desenvolvedor Full Stack Jr.</strong> com foco em{" "}
              <strong>React.js, Next.js e WordPress</strong>. Durante minha
              trajetória como desenvolvedor web freelancer, venho construindo
              experiência sólida em desenvolvimento front-end e back-end,
              trabalhando com tecnologias como{" "}
              <strong>HTML/CSS, JavaScript/TypeScript, Node.js</strong> e bancos
              de dados SQL/NoSQL.
            </p>

            <p>
              Nos últimos anos, desenvolvi{" "}
              <strong>mais de 10 sites institucionais e landing pages</strong>,
              além de implementar{" "}
              <strong>APIs REST com Node.js e Express</strong>. Meu trabalho é
              focado em performance e qualidade, alcançando{" "}
              <strong>pontuações superiores a 90 no Google Lighthouse</strong>{" "}
              em meus projetos.
            </p>

            <p>
              <strong>Graduado em Sistemas para Internet</strong> pela
              UNICESUMAR e em constante evolução através do curso de{" "}
              <strong>desenvolvimento Full-Stack na B7Web</strong>. Busco
              constantemente aprimorar minhas habilidades em boas práticas de
              código e otimização de performance, visando sempre entregar a
              melhor experiência ao usuário final.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mt-16"
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
  );
}
