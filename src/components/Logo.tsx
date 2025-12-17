"use client";

import { Pixelify_Sans } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const pixelify = Pixelify_Sans({ weight: "400", subsets: ["latin"] });

interface LogoProps {
    sizeText?: string;
    sizeTextMd?: string;
}

export default function Logo({ sizeText = "text-xl", sizeTextMd = "md:text-2xl" }: LogoProps) {
    return (
        <Link href="/" className="group flex gap-3 items-center">
            {/* Icon Container */}
            <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow"
            >
                <span className="text-white font-bold text-lg">W</span>
                {/* Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-50 blur-md transition-opacity -z-10" />
            </motion.div>

            {/* Text */}
            <div className={`${pixelify.className} ${sizeText} ${sizeTextMd} tracking-wide`}>
                <span className="font-black text-base-content">WILL</span>
                <span className="font-black text-gradient ml-1">ÁVILA</span>
            </div>
        </Link>
    );
}
