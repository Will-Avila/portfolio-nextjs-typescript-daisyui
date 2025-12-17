"use client";

import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/will-avila", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/Will-Avila", label: "GitHub" },
    { icon: FaWhatsapp, href: "https://api.whatsapp.com/send?phone=5585999159652", label: "WhatsApp" },
  ];

  return (
    <footer className="relative bg-base-300 py-12 overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold text-gradient mb-2">
              Will Avila
            </h2>
            <p className="text-sm text-neutral-content/50">
              Desenvolvedor Full Stack
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="group w-10 h-10 rounded-xl glass-card flex items-center justify-center text-neutral-content/50 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm"
              >
                <social.icon size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-neutral-content/40 flex items-center gap-1 justify-center md:justify-end">
              &copy; {new Date().getFullYear()} Feito com
              <FaHeart className="text-red-500 animate-pulse mx-1" size={12} />
              por Will Avila
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
