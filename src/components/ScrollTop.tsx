import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollTop() {
    return (
        <Link href="#sobre" className="">
            <FaArrowCircleUp
                className="fixed bottom-4 right-4 cursor-pointer text-4xl text-accent shadow-lg z-50 hover:text-info transition"
            />
        </Link>
    )
}
