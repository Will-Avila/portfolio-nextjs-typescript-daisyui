"use client";

import Skills from "./Skills";
import Title from "./Title";
import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { value: "10+", label: "Projetos Entregues", color: "text-accent" },
    { value: "90+", label: "Performance Score", color: "text-secondary" },
    { value: "5+", label: "Anos de Experiência", color: "text-primary" },
  ];

  return (
    <section id="about" className="relative bg-base-200/30 py-20 md:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient opacity-50" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-white/5 rounded-full"
        />
      </div>

      <div className="container-xl mx-auto px-5 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title title="Sobre Mim" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-5 text-lg text-neutral-content/80 leading-relaxed">
              <p className="relative pl-4 border-l-2 border-primary/50">
                Sou um <strong className="text-base-content">Desenvolvedor Full Stack</strong> apaixonado por transformar problemas complexos em interfaces simples e intuitivas.
              </p>
              <p>
                Especialista em <span className="text-primary font-semibold">React.js</span>, <span className="text-secondary font-semibold">Next.js</span> e <span className="text-accent font-semibold">TypeScript</span>, construo soluções digitais que unem beleza e performance.
              </p>
              <p>
                Com experiência prática em diversos projetos, desde landing pages de alta conversão até aplicações web complexas, meu foco é sempre a qualidade do código e a experiência do usuário.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 text-center group hover:border-white/10 transition-all card-shine"
                >
                  <h3 className={`text-3xl md:text-4xl font-bold ${stat.color} group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-content/60 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-3xl blur-3xl -z-10 opacity-60" />

            {/* Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-lg">⚡</span>
                </div>
                <h3 className="text-xl font-bold">Stack Tecnológico</h3>
              </div>

              <Skills />

              {/* Bottom Decoration */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-sm text-neutral-content/50 text-center">
                  Sempre aprendendo novas tecnologias ✨
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
