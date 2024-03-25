import { useState } from "react"
import { useTranslation } from "../../../context/translation"

export default function MinQuestions({ players, handleStep }) {
    const [palyer1, setPlayer1] = useState(players[0].name)
    const [palyer2, setPlayer2] = useState(players[1].name)
    const [playersIndex, setIndex] = useState(1)
    const { t,RTL } = useTranslation()
    function next() {
        const nextIndex = (playersIndex + 1) % players.length;
        setPlayer1(players[playersIndex].name);
        setPlayer2(players[nextIndex].name)
        setIndex(nextIndex);
        if (playersIndex === 0) {
            handleVote(4)
        }
    }

    function handleVote(num) {
        handleStep(num)
    }
    return (
        <div className="h-full flex flex-col justify-center ">
            <div style={{direction:RTL?"rtl":"ltr"}} className="text-white text-center text-3xl">
                {palyer1} {t("min-ask")} {palyer2}
            </div>
            <div className="flex justify-center mt-5">
                <button
                    onClick={() => handleVote(5)}
                    className={`mr-2 rounded-xl p-2 w-24 font-bold text-white border-2 cursor-cursor-not-allowed border-[#27f5d1] hover:border-[#fb3690] `}>
                    {t("min-vote")}
                </button>
                <button
                    onClick={() => next()}
                    className={`rounded-xl p-2 w-24 font-bold text-white border-2 cursor-cursor-not-allowed border-[#27f5d1] hover:border-[#fb3690] `}>
                    {t("min-next")}
                </button>
            </div>

        </div>
    )
}