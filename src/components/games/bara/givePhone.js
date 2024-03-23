import { useTranslation } from "../../../context/translation"

export default function GivePhone({ handleNextStep, player }) {
    const { t } = useTranslation()
    return (
        <div className="h-full flex flex-col justify-center ">
            <div className="text-white text-center text-3xl">
                {t("min-give")} {player.name}
            </div>
            <div className="flex justify-center mt-3">
                <div className="welcome-btn p-1  border-2 mt-5  border-[#fb3690] w-fit h-fit self-center rounded-tl-xl rounded-br-xl">
                    <button className="sm:w-44 w-32 text-white border-2 font-bold border-[#fb3690] p-2 rounded-tl-xl rounded-br-xl" onClick={() => handleNextStep()}>{t("min-next")}</button>
                </div>
            </div>

        </div>
    )
}