import { useTranslation } from "../../../context/translation"

export default function WinnerTic({ winner, playagain }) {
    const { t, RTL} = useTranslation()

    return (
        <>

            <div dir={RTL ? "rtl" : "ltr"} className={`text-5xl absolute text-white count-overlay flex flex-col justify-center items-center top-0 left-0 w-full h-full`}>
                {winner} {winner === t("tic-draw") ? "" : t("tic-wins")}


                <button
                    onClick={() => playagain()}
                    className={`rounded-xl mt-10 text-xs p-2 w-26 font-bold text-white border-2 justify-self-end  border-[#b9004e]`}>
                    {t("tic-again")}
                </button>


            </div>

        </>
    )
}