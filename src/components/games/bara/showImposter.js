// import { useState } from "react"
import { useTranslation } from "../../../context/translation"

export default function ShowImposter({ imposter,players, handleStep }) {

    const { t,RTL } = useTranslation()

    function handleMove() {
        handleStep(7)
    }
    return (
        <div className="h-full flex flex-col justify-center ">
            <div style={{direction:RTL?"rtl":"ltr"}} className="text-white text-center text-3xl">
                 {imposter.name} {t("min-show-imposter")}
            </div>
            <div className="flex justify-center mt-5">
                <button
                    onClick={() => handleMove()}
                    className={`rounded-xl p-2 w-24 font-bold text-white border-2 cursor-cursor-not-allowed border-[#27f5d1] hover:border-[#fb3690] `}>
                    {t("min-next")}
                </button>
            </div>

        </div>
    )
}