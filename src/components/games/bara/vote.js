import { useState } from "react";
import { useTranslation } from "../../../context/translation";

export default function MinVote({ updateScores, players, handleStep, imposter }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useTranslation();

    function handleVote(playerIndex) {
        const currentPlayer = players[currentIndex];
        const votedPlayer = players[playerIndex];

        if (currentPlayer.name === imposter.name) {
        } else {
            if (votedPlayer.name === imposter.name) {
                const updatedPlayers = [...players];
                updatedPlayers[currentIndex] = {
                    ...players[currentIndex],
                    score: updatedPlayers[currentIndex].score + 100
                };
                updateScores(updatedPlayers);
            }
        }

        next();
    }

    function next() {
        if (currentIndex + 1 === players.length) {
            handleStep(6);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        // <div className="h-full flex flex-col justify-center ">
        //     <div className="text-white text-center sm:text-3xl text-2xl text-[#27f5d1]">
        //         {players[currentIndex].name} choose the imposter
        //     </div>
        //     <div className="flex flex-col justify-center items-center ">
        //         {players.map((player, index) => (
        //             (index !== currentIndex) && (
        //                 <div
        //                     key={index}
        //                     onClick={() => handleVote(index)}
        //                     className="mt-5 sm:w-1/4 w-3/4 text-white text-center sm:text-2xl text-base border-2 p-3 rounded-xl cursor-pointer border-[#27f5d1] hover:border-[#fb3690]"
        //                 >
        //                     {player.name}
        //                 </div>
        //             )
        //         ))}
        //     </div>

        // </div>


        <div className="h-full flex flex-col pt-10">
            <div className="text-white sm:text-3xl text-2xl pb-10 text-center">
                {players[currentIndex].name} {t("min-vote-imposter")}
            </div>
            <div className="h-full flex flex-col  items-center ">
                <div className="sm:w-1/4 w-full h-60 overflow-y-auto scrollbar-hidden px-5 ">
                    {players.map((player, index) => (
                        (index !== currentIndex) && (
                            <div
                                key={index}
                                onClick={() => handleVote(index)}
                                className="mt-5 w-full  text-white text-center sm:text-2xl text-base border-2 p-3 rounded-xl cursor-pointer border-[#27f5d1] hover:border-[#fb3690]"
                            >
                                {player.name}
                            </div>
                        )
                    ))}
                </div>
            </div>
            </div>
            );
}
