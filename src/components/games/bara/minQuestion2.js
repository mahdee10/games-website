import { useState } from "react"
import { useTranslation } from "../../../context/translation"

export default function MinQuestions2({ players, handleStep }) {
    const [palyer1, setPlayer1] = useState(players[0].name)
    const [exceptplayer, setExceptPlayer] = useState(players[players.length - 1].name)
    const [playersIndex, setIndex] = useState(1)
    const { t,RTL } = useTranslation()
    function next() {
        const nextIndex = (playersIndex + 1) % players.length;
        setExceptPlayer(palyer1)
        setPlayer1(players[playersIndex].name);
        setIndex(nextIndex);
    }

    function handleVote() {
        handleStep(5)
    }
    return (
        <div className="h-full flex flex-col justify-center ">
            <div style={{direction:RTL?"rtl":"ltr"}} className="text-white text-center text-3xl px-2">
                {palyer1} {t("min-except")} {exceptplayer}
            </div>
            <div className="flex justify-center mt-5">
                <button
                    onClick={() => handleVote()}
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