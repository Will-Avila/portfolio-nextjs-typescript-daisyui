"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-base-100 pt-28 pb-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Aurora Gradient Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
        />

        {/* Floating Decorative Circles */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-3 h-3 bg-primary/60 rounded-full"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[15%] w-2 h-2 bg-secondary/60 rounded-full"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[20%] w-4 h-4 bg-accent/40 rounded-full"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] z-0" />

      <div className="container-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10 px-5">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-2xl"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full glass-card text-sm font-medium tracking-wide mb-6 border-white/10"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Aberto para projetos
          </motion.span>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              Olá, eu sou
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-gradient-animate"
            >
              Will Avila
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg lg:text-xl text-neutral-content/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Desenvolvedor Full Stack apaixonado por criar experiências digitais
            <span className="text-primary font-medium"> modernas</span>,
            <span className="text-secondary font-medium"> performáticas</span> e
            <span className="text-accent font-medium"> inovadoras</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="#portfolio"
              className="group relative btn btn-primary px-8 text-lg rounded-full overflow-hidden transition-all transform hover:-translate-y-1 hover:shadow-glow-md"
            >
              <span className="relative z-10">Ver Projetos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="#contact"
              className="btn glass px-8 text-lg rounded-full transition-all hover:bg-white/10 hover:-translate-y-1 border-white/20"
            >
              Falar Comigo
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-4"
          >
            <span className="text-sm text-neutral-content/40 mr-2">Me encontre em</span>
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/will-avila", label: "LinkedIn" },
              { icon: FaGithub, href: "https://github.com/Will-Avila", label: "GitHub" },
              { icon: FaWhatsapp, href: "https://api.whatsapp.com/send?phone=5585999159652", label: "WhatsApp" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="group w-12 h-12 rounded-full glass-card flex items-center justify-center text-neutral-content/60 hover:text-primary hover:border-primary/30 transition-all hover:shadow-glow-sm hover:-translate-y-1"
              >
                <social.icon size={22} className="group-hover:scale-110 transition-transform" />
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:w-1/2 flex justify-center pb-8"
        >
          <div className="relative w-72 h-72 lg:w-[420px] lg:h-[420px]">
            {/* Rotating Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-hero-glow opacity-20 blur-3xl animate-spin-slow" />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass border-2 border-white/10">
              <img
                src="/images/will-avila.webp"
                alt="Will Avila"
                className="w-full h-full object-contain relative z-10"
              />
              {/* Inner Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-base-100/50 via-transparent to-transparent z-20 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-content/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
