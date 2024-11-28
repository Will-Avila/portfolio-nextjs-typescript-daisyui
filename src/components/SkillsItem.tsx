interface SkillsItemProps {
    urlImage: string
    alt: string
    title: string
}

export default function SkillsItem({ urlImage, alt, title }: SkillsItemProps) {
    return (
        <div className="flex flex-col w-full items-center gap-8 bg-primary py-8 px-2 rounded-xl shadow-xl hover:bg-accent hover:text-secondary transition ">
            <img src={urlImage} alt={alt} width={100} height={100} />
            <h3 className="text-xl font-semibold text-center">{title}</h3>
        </div>
    )
}
