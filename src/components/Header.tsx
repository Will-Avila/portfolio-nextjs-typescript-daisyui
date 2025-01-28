import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-[url('/images/background-will-avila.webp')] bg-cover bg-primary shadow-xl">
      <div className="mx-auto px-5">
        <Navbar />
        <Hero />
      </div>
    </header>
  );
}
