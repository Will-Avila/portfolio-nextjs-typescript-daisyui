import { Pixelify_Sans } from "next/font/google";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";

const pixelify = Pixelify_Sans({ weight: "400", subsets: ["latin"] });

export default function Logo() {
    return (
        <Link href="/" className="flex gap-2 items-center">
            <FaLaptopCode
                size={36}
                className="text-3xl text-accent" />
            <div className={pixelify.className}>
                <span className="text-xl md:text-3xl font-black">WILL </span>
                <span className="text-xl md:text-3xl font-black text-accent">ÁVILA</span>
            </div>
        </Link>
    )
}
