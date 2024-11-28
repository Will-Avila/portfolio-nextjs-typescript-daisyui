import SkillsItem from "./SkillsItem";
import skillCards from "@/data/skillCards";

export default function Skills() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-center gap-4 mt-8">
            {skillCards.map((card) => (
                <SkillsItem
                    key={card.id}
                    urlImage={card.urlImage}
                    alt={card.alt}
                    title={card.title}
                />
            ))}
        </div>
    )
}
