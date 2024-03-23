// import { useState } from "react"
import { useState } from "react"
import { useMinCategory } from "../../../context/minCategoryContext"
import { useTranslation } from "../../../context/translation"

export default function ImposterGuess({ imposter, players, handleStep,updateScores }) {
    const { categories, chosenWord } = useMinCategory()
    const [chosen, setChosen] = useState(false);
    const [selected, setSelected] = useState("");
    const { t, RTL } = useTranslation()

    function handleMove() {
        handleStep(8)
    }

    function selectWord(category) {
        setChosen(true)
        setSelected(category)
        if (category === chosenWord) {
            const updatedPlayers = players.map((player) => {
                if (imposter.name === player.name) {
                    return { ...player, score: player.score + 100 }
                }
                return player;
            })
            updateScores(updatedPlayers);
        }
    }

    return (
        <div className="h-full flex flex-col pt-10">
            <div className="text-white text-2xl pb-10 text-center">
                {imposter.name} what is the word
            </div>
            <div className="h-full flex flex-col  items-center ">
                <div className="sm:w-1/4 w-full h-60 overflow-y-auto scrollbar-hidden px-5 ">
                    {
                        categories.map((category, index) => (
                            <div
                                onClick={() => { if (!chosen) selectWord(category) }}
                                className={`mt-5 text-white p-3 border-2 w-full border-white rounded-xl flex justify-between items-center 
                        ${chosen && category === chosenWord ? "border-green-500" : ""}
                        ${chosen && selected === category && category === chosenWord ? "border-green-500" : ""}
                        ${chosen && selected === category && category !== chosenWord ? "border-red-500" : ""}
                        ${RTL ? "flex-row-reverse" : ""}`}>
                                {category}
                            </div>
                        ))
                    }
                </div>
                <div className="text-white text-2xl pt-10 text-center">
                    <button
                        onClick={() => handleMove()}
                        className={`rounded-xl p-2 w-fit  text-white border-2  border-[#b9004e] `}>
                        {t("min-next")}
                    </button>
                </div>
            </div>

        </div>
    )
}