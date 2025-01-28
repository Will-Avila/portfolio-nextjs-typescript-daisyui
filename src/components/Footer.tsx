"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <span className="divider -mt-2 divider-accent">
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/will-avila" target="_blank">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Will-Avila" target="_blank">
            <FaGithub size={24} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5585999159652"
            target="_blank"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </span>
      <div className="container-xl flex justify-between items-center px-5 pb-4">
        <Logo sizeIcon={24} sizeText="text-md" sizeTextMd="md:text-lg" />
        <span className="text-end text-sm">
          &copy; Will Avila {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
