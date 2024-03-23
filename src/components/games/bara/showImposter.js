// import { useState } from "react"
import { useTranslation } from "../../../context/translation"

export default function ShowImposter({ imposter,players, handleStep }) {

    const { t } = useTranslation()

    function handleMove() {
        handleStep(7)
    }
    return (
        <div className="h-full flex flex-col justify-center ">
            <div className="text-white text-center text-3xl">
                The imposter is 
            </div>
            <div className="text-white text-center text-3xl mt-3">
                {imposter.name}
            </div>
            <div className="flex justify-center mt-3">
                <button
                    onClick={() => handleMove()}
                    className={`rounded-xl p-2 w-fit  text-white border-2  border-[#b9004e] `}>
                    {t("min-next")}
                </button>
            </div>

        </div>
    )
}