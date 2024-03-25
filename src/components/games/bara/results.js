// import { useState } from "react"
import { useTranslation } from "../../../context/translation"

export default function ShowResults({ players, handleStep,changeImposter }) {

    const { t, RTL } = useTranslation()
    function handleMove() {
        handleStep(1)
        
    }
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    return (
        <div className="h-full flex flex-col pt-10">
            <div className="text-white text-2xl pb-10 text-center">
                {t("min-results")}
            </div>
            <div className="h-full flex flex-col  items-center ">
                <div className="sm:w-1/4 w-full h-60 overflow-y-auto scrollbar-hidden px-5 ">
                    {
                        sortedPlayers.map((player) => (
                            <div className={`mt-5 text-white p-3 border-2 w-full border-white rounded-xl flex justify-between items-center ${RTL ? "flex-row-reverse" : ""}`}>
                                {player.name}
                                <div className="text-white">{player.score}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="text-white text-2xl pt-10 text-center">
                    <button
                        onClick={() => handleMove()}
                        className={`rounded-xl p-2 w-24 font-bold text-white border-2 cursor-cursor-not-allowed border-[#27f5d1] hover:border-[#fb3690] `}>
                        {t("min-next")}
                    </button>
                </div>
            </div>

        </div>
    )
}