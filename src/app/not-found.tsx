import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <h1 className="text-3xl font-semibold">Página não encontrada!</h1>
      <Link href="/" className="btn btn-outline btn-accent border-2">Voltar</Link>
    </div>
  )
}

