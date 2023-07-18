import { useState } from "react"
import { yellowBeltTechs } from "../assets/yellowBeltTechs.js"
import { orangeBeltTechs } from "../assets/orangeBeltTechs"
import TechniqueCard from "../elements/TechniqueCard"

const Trainer = () => {
    const [includeYellowBeltTechs, setIncludeYellowBeltTechs] = useState(false)
    const [includeOrangeBeltTechs, setIncludeOrangeBeltTechs] = useState(false)
    const [showRandomTech, setShowRandomTech] = useState(false)
    const [randomTech, setRandomTech] = useState(
        "Select the belts you want to include and hit the generate button to get started!"
    )

    const getRandomTech = options => {
        console.log(options)
        console.log(Math.floor(Math.random() * options.length))
        setRandomTech(
            options[Math.floor(Math.floor(Math.random() * options.length + 1))]
        )
    }

    const handleGenerate = () => {
        if (!includeOrangeBeltTechs && !includeYellowBeltTechs) {
            setRandomTech(
                "Please select one or more belt colors to generate a technique"
            )
        } else {
            getRandomTech(
                [
                    ...(includeYellowBeltTechs ? yellowBeltTechs : []),
                    ...(includeOrangeBeltTechs ? orangeBeltTechs : [])
                ].filter(e => e !== false)
            )
        }
    }

    return (
        <div>
            <section>
                <h1>Select the belt techniques you would like to view</h1>
                <button
                    className="border-solid border-red-600 border rounded-2xl p-2"
                    onClick={() =>
                        setIncludeYellowBeltTechs(!includeYellowBeltTechs)
                    }
                >
                    {includeYellowBeltTechs
                        ? "Hide yellow belt techniques"
                        : "include yellow belt techniques"}
                </button>
                <button
                    className="border-solid border-red-600 border rounded-2xl p-2"
                    onClick={() =>
                        setIncludeOrangeBeltTechs(!includeOrangeBeltTechs)
                    }
                >
                    {includeOrangeBeltTechs
                        ? "Hide orange belt techniqies"
                        : "Include orange belt techniques"}
                </button>
                <button
                    className="bg-red-600 text-white rounded-2xl p-2"
                    onClick={() => handleGenerate()}
                >
                    Generate random technique
                </button>
            </section>
            <main>
                {typeof randomTech === "string" ? (
                    randomTech
                ) : (
                    <TechniqueCard
                        key={"trainerTech" + randomTech.id}
                        tech={randomTech}
                    />
                )}
            </main>
        </div>
    )
}

export default Trainer
