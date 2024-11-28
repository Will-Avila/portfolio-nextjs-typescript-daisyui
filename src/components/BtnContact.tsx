"use client"

import { motion } from "framer-motion"

type BtnContactProps = React.ComponentProps<typeof motion.a> & {
    icon: JSX.Element;
    text: string;
    url: string;
}

export default function BtnContact({ icon, text, url, ...props }: BtnContactProps) {
    return (
        <motion.a href={url} className="btn shadow-lg bg-primary gap-4" target="_blank"
            {...props}
        >
            <span>{icon}</span><span className="text-accent text-lg font-light">{text}</span>
        </motion.a>
    )
}
