import { useState } from "react"
import { useTranslation } from "../../../context/translation"

export default function MinQuestions({ players, handleStep }) {
    const [palyer1, setPlayer1] = useState(players[0].name)
    const [palyer2, setPlayer2] = useState(players[1].name)
    const [playersIndex, setIndex] = useState(1)
    const {t}=useTranslation()
    function next() {
        const nextIndex = (playersIndex + 1) % players.length;
        setPlayer1(players[playersIndex].name);
        setPlayer2(players[nextIndex].name)
        setIndex(nextIndex);
        if(playersIndex===0){
            handleVote(4)
        }
    }

    function handleVote(num) {
        handleStep(num)
    }
    return (
        <div className="h-full flex flex-col justify-center ">
            <div className="text-white text-center text-3xl">
                {palyer1} {t("min-ask")} {palyer2}
            </div>
            <div className="flex justify-center mt-3">
                <div className="welcome-btn p-1  border-2 mt-5  border-[#fb3690] w-fit h-fit self-center rounded-tl-xl rounded-br-xl">
                    <button className="sm:w-44 w-32 text-white border-2 font-bold border-[#fb3690] p-2 rounded-tl-xl rounded-br-xl" onClick={() => handleVote(5)}>{t("min-vote")}</button>
                </div>
                <div className="welcome-btn p-1  border-2 mt-5  border-[#fb3690] w-fit h-fit self-center rounded-tl-xl rounded-br-xl">
                    <button className="sm:w-44 w-32 text-white border-2 font-bold border-[#fb3690] p-2 rounded-tl-xl rounded-br-xl" onClick={() => next()}>{t("min-next")}</button>
                </div>
            </div>

        </div>
    )
}