"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import menu from "@/data/menu";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "glass-intense py-3 shadow-lg shadow-black/10"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0"
        >
          <Logo />
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex items-center"
        >
          <ul className="flex items-center space-x-1">
            {menu.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.url}
                  className="relative px-4 py-2 text-base font-medium text-neutral-content/70 hover:text-base-content transition-colors group"
                >
                  {item.name}
                  {/* Underline Animation */}
                  <span className="absolute left-4 right-4 -bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="ml-6 btn btn-primary btn-sm rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
          >
            Contato
          </Link>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-lg focus:outline-none border border-white/10"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full glass-intense border-t border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col p-6 space-y-2">
              {menu.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    href={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-neutral-content/80 hover:text-primary hover:bg-white/5 rounded-xl transition-all"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}

              {/* Mobile CTA */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center btn btn-primary rounded-xl"
                >
                  Entrar em Contato
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
