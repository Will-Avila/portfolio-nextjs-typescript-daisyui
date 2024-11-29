import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="bg-primary shadow-xl">
            <div className="container mx-auto px-5">
                <Navbar />
                <Hero />
            </div>
        </header>
    )
}
