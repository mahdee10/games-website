// import { useState } from "react"
import { useTranslation } from "../../../context/translation"

export default function ShowResults({ players, handleStep }) {

    const { t, RTL } = useTranslation()
    function handleMove() {
        handleStep(1)
    }
    return (
        <div className="h-full flex flex-col pt-10">
        <div className="text-white text-2xl pb-10 text-center">
            Results
        </div>
        <div className="h-full flex flex-col  items-center ">
            <div className="sm:w-1/4 w-full h-60 overflow-y-auto scrollbar-hidden px-5 ">
                {
                    players.map((player) => (
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
                    className={`rounded-xl p-2 w-fit  text-white border-2  border-[#b9004e] `}>
                    {t("min-next")}
                </button>
            </div>
        </div>

    </div>
    )
}