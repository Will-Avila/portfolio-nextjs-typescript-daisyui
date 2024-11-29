import { Pixelify_Sans } from "next/font/google";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";

const pixelify = Pixelify_Sans({ weight: "400", subsets: ["latin"] });

interface LogoProps {
    sizeIcon?: number
    sizeText?: string
    sizeTextMd?: string
}

export default function Logo({ sizeIcon = 36, sizeText = "text-2xl", sizeTextMd = "md:text-3xl" }: LogoProps) {
    return (
        <Link href="/" className="flex gap-2 items-center">
            <FaLaptopCode
                size={sizeIcon}
                className="text-3xl text-accent" />
            <div className={`${pixelify.className} ${sizeText} ${sizeTextMd}`}>
                <span className="font-black">WILL </span>
                <span className="font-black text-accent">ÁVILA</span>
            </div>
        </Link>
    )
}
