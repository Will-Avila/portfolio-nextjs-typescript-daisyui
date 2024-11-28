import { FaCode, FaGlobeAmericas } from "react-icons/fa"

interface PortfolioCardProps {
    title: string
    technologies: string[]
    urlImage: string
    alt: string
    urlProject: string
    urlGithub?: string
}

export default function PortfolioCard({ title, technologies, urlImage, alt, urlProject, urlGithub }: PortfolioCardProps) {
    return (
        <div className="card bg-base-100 w-full shadow-xl items-center text-center">
            <figure>
                <img
                    src={urlImage}
                    width={600}
                    height={600}
                    alt={alt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center mb-2 text-base">
                    {title}
                </h2>
                <div className="card-actions justify-center">
                    {technologies.map((technology, index) => (
                        <div key={index} className="badge badge-outline badge-accent">{technology}</div>
                    ))}
                </div>
                <div className="flex justify-center gap-4 pt-4">
                    <a className="btn btn-outline tooltip tooltip-info flex" href={urlProject} data-tip="Acessar projeto online" target="_blank">
                        <FaGlobeAmericas
                            size={32}
                        />
                    </a>
                    {urlGithub && (
                        <a className="btn btn-outline tooltip tooltip-info flex" href={urlGithub} data-tip="Ver projeto no github" target="_blank">
                            <FaCode
                                size={32}
                            />
                        </a>
                    )}

                </div>
            </div>
        </div>
    )
}
