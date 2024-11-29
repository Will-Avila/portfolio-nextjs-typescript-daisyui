"use client"

import Link from "next/link"
import { FaCloudDownloadAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"
import TypingEffect from "./TypingEffect"

export default function Hero() {

    return (
        <div className="hero">
            <div className="container flex flex-col items-center justify-between lg:flex-row md:gap-8">
                <div className="text-center md:text-left my-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-center sm:text-left font-serif">
                        <span>
                            <TypingEffect
                                text="Olá,"
                                speed={100}
                            />
                        </span>
                        <span className="text-accent">
                            <TypingEffect
                                text="Eu sou Will!"
                                speed={100}
                                delay={500}
                            />
                        </span>
                    </h1>
                    <h2 className="my-4 pb-2 text-center sm:text-left text-lg font-serif">
                        <TypingEffect
                            text="Desenvolvedor Web"
                            speed={100}
                            delay={2000}
                        />
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:justify-between">
                        <Link href="/will-avila-cv.pdf" target="_blank" title="Download Curriculum Vitae"
                            className="btn btn-outline btn-accent border-2 text-lg"
                        >
                            <FaCloudDownloadAlt
                                size={24}
                            />
                            Download CV
                        </Link>
                        <div className="flex gap-4">
                            <Link className="tooltip tooltip-info" href="https://www.linkedin.com/in/will-avila" target="_blank" title="Ir para o Linkedin" data-tip="Ir para o Linkedin">
                                <FaLinkedin
                                    className="border-2 p-1 rounded-md fill-accent border-accent"
                                    size={32}
                                />
                            </Link>
                            <Link className="tooltip tooltip-info" href="https://github.com/Will-Avila" target="_blank" title="Ir para o Github" data-tip="Ir para o Github">
                                <FaGithub
                                    className="border-2 p-1 rounded-md fill-accent border-accent"
                                    size={32}
                                />
                            </Link>
                            <Link className="tooltip tooltip-info" href="https://api.whatsapp.com/send?phone=5585999159652" title="Falar no Whatsapp" target="_blank" data-tip="Falar no Whatsapp">
                                <FaWhatsapp
                                    className="border-2 p-1 rounded-md fill-accent border-accent"
                                    size={32}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <motion.img className="bottom-0 max-size-3/5  sm:pt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}

                    src="/images/will-avila.webp"
                    alt="Will Avila"
                    width={600}
                    height={600}
                />
            </div>
        </div>
    )
}
