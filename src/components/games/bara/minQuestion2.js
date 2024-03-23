import { useState } from "react"
import { useTranslation } from "../../../context/translation"

export default function MinQuestions2({ players, handleStep }) {
    const [palyer1, setPlayer1] = useState(players[0].name)
    const [exceptplayer, setExceptPlayer] = useState(players[players.length - 1].name)
    const [playersIndex, setIndex] = useState(1)
    const { t } = useTranslation()
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
            <div className="text-white text-center text-3xl">
                {palyer1} {t("min-except")} {exceptplayer}
            </div>
            <div className="flex justify-center mt-3">
                <button
                    onClick={() => handleVote()}
                    className={`rounded-xl p-2 w-fit  text-white border-2  border-[#b9004e] mx-2`}>
                    {t("min-vote")}
                </button>
                <button
                    onClick={() => next()}
                    className={`rounded-xl p-2 w-fit  text-white border-2  border-[#b9004e] `}>
                    {t("min-next")}
                </button>
            </div>

        </div>
    )
}