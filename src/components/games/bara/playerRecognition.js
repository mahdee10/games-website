import { useTranslation } from "../../../context/translation"

export default function PlayerRecognition({ imposter, player, onNext,chosenWord }) {
    const {t,RTL}=useTranslation()
    return (

        <div className="h-full flex flex-col justify-center px-1">
            <div style={{direction:RTL?"rtl":"ltr"}} className="text-white text-center text-3xl">
                {player.name} {t("min-u")} {player.name === imposter.name ? t("min-out") : t("min-in")} {t("min-story")} {" "}
                {player.name === imposter.name ? "" : t("min-word")} {player.name === imposter.name ? "" : t(chosenWord)}
            </div>
            <div className="flex justify-center mt-5">
            <button
                    onClick={() => onNext()}
                    className={`rounded-xl p-2 w-24 font-bold text-white border-2 cursor-cursor-not-allowed border-[#27f5d1] hover:border-[#fb3690] `}>
                    {t("min-next")}
                </button>
            </div>

        </div>
    )
}