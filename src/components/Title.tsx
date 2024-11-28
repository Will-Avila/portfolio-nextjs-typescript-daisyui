import { Lora } from "next/font/google";

const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

interface titleProps {
    title: string
}
export default function Title({ title }: titleProps) {
    return (
        <div className={lora.className}>
            <h2 className="title">{title}</h2>
        </div>
    )
}
