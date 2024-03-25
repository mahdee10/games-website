import { useTranslation } from "../../../context/translation"

export default function GivePhone({ handleNextStep, player }) {
    const { t } = useTranslation()
    return (
        <div className="h-full flex flex-col justify-center ">
            <div className="text-white text-center text-3xl">
                {t("min-give")} {player.name}
            </div>
            <div className="flex justify-center mt-5">
                <button
                    onClick={() => handleNextStep()}
                    className={`rounded-xl p-2 w-24 font-bold text-white border-2 cursor-cursor-not-allowed border-[#27f5d1] hover:border-[#fb3690] `}>
                    {t("min-next")}
                </button>
            </div>

        </div>
    )
}