// import { useState } from "react"
import { useMinCategory } from "../../../context/minCategoryContext"
import { useTranslation } from "../../../context/translation"

export default function ImposterGuess({ imposter,players, handleStep }) {
    const { categories } = useMinCategory()
    const { t,RTL } = useTranslation()

    function handleMove() {
        handleStep(8)
    }
    return (
        <div className="h-full flex flex-col items-center ">
            <div className="text-white text-center text-3xl">
            {imposter.name}  What is the word
            </div>

            <div className="h-full flex flex-col  items-center ">
            <div className="sm:w-1/4 w-full h-60 overflow-y-auto scrollbar-hidden px-5 ">
                {
                    categories.map((category) => (
                        <div className={`mt-5 text-white p-3 border-2 w-full border-white rounded-xl flex justify-between items-center ${RTL ? "flex-row-reverse" : ""}`}>
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