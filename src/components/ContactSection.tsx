"use client";

import Title from "./Title";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contacts = [
    {
      icon: FaEnvelope,
      title: "Email",
      text: "willaviladev@gmail.com",
      link: "mailto:willaviladev@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/20",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      text: "(85) 99915-9652",
      link: "https://api.whatsapp.com/send?phone=5585999159652",
      gradient: "from-green-500 to-emerald-500",
      shadowColor: "shadow-green-500/20",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Localização",
      text: "Fortaleza, CE",
      link: "https://maps.app.goo.gl/Z2o55P9rq6ZB5fPo6",
      gradient: "from-red-500 to-orange-500",
      shadowColor: "shadow-red-500/20",
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center bg-base-200/30 py-20 md:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />

        {/* Animated Lines */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
        />
      </div>

      <div className="container-xl mx-auto px-5 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Title
            title="Vamos Conversar?"
            subtitle="Estou disponível para novos projetos e oportunidades. Entre em contato e vamos transformar sua ideia em realidade."
          />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`group relative glass-card p-8 flex flex-col items-center text-center overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 ${contact.shadowColor} hover:shadow-xl`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon Container */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <contact.icon size={28} className="text-white" />
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {contact.title}
              </h3>
              <p className="text-neutral-content/60 group-hover:text-neutral-content/80 transition-colors">
                {contact.text}
              </p>

              {/* Arrow Indicator */}
              <div className="mt-4 flex items-center gap-2 text-sm text-neutral-content/40 group-hover:text-primary transition-all">
                <span>Entrar em contato</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={12} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-neutral-content/70">Disponível para novos projetos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
