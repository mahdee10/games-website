// import { useState } from "react"
import { useState } from "react"
import { useMinCategory } from "../../../context/minCategoryContext"
import { useTranslation } from "../../../context/translation"
import abo from "../../../imgs/abo.mp4"
export default function ImposterGuess({ imposter, players, handleStep, updateScores }) {
    const { categories, chosenWord } = useMinCategory()
    const [showVideo, setShowVideo] = useState(false);

    const [chosen, setChosen] = useState(false);
    const [selected, setSelected] = useState("");
    const { t, RTL } = useTranslation()

    function handleMove() {
        handleStep(8)
    }

    function selectWord(category) {
        setChosen(true)
        setSelected(category)
        if (category === chosenWord) {
            const updatedPlayers = players.map((player) => {
                if (imposter.name === player.name) {
                    return { ...player, score: player.score + 100 }
                }
                return player;
            })
            updateScores(updatedPlayers);
        }
        else {
            setShowVideo(true)
            setTimeout(() => {
                setShowVideo(false);
            }, 4000);
        }
    }




    return (
        <>


            <div className="h-full flex flex-col pt-10 relative">

                {showVideo && (
                    <div className={`text-5xl absolute text-white count-overlay flex flex-col justify-center items-center top-0 left-0 w-full h-full`}>
                        <video playsInline className='w-full h-full' autoPlay>
                            <source src={abo} type="video/mp4" />
                        </video>
                    </div>
                )}

                <div style={{ direction: RTL ? "rtl" : "ltr" }} className="text-white text-2xl pb-10 text-center">
                    {imposter.name} {t("min-ask-imposter")}
                </div>
                <div className="h-full flex flex-col  items-center ">
                    <div className="sm:w-1/4 w-full h-60 overflow-y-auto scrollbar-hidden px-5 ">
                        {
                            categories.map((category, index) => (
                                <div
                                    onClick={() => { if (!chosen) selectWord(category) }}
                                    className={`mt-5 text-white p-3 border-2 w-full rounded-xl flex justify-between items-center 
                        ${chosen && category === chosenWord ? "border-[#27f5d1]" : ""}
                        ${chosen && selected === category && category === chosenWord ? "border-[#27f5d1]" : ""}
                        ${chosen && selected === category && category !== chosenWord ? "border-[#fb3690]" : ""}
                        ${RTL ? "flex-row-reverse" : ""}`}>
                                    {t(category)}
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-white text-2xl pt-10 text-center">
                        <button
                            onClick={() => handleMove()}
                            className={`rounded-xl p-2 w-24 font-bold text-white border-2 cursor-cursor-not-allowed border-[#27f5d1] hover:border-[#fb3690] `}>
                            {t("min-next")}
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}