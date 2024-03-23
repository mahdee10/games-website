import { useState } from "react";
// import { useTranslation } from "../../../context/translation";

export default function MinVote({ updateScores, players, handleStep, imposter }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const { t } = useTranslation();

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
        <div className="h-full flex flex-col justify-center ">
            <div className="text-white text-center text-3xl">
                {players[currentIndex].name} choose the imposter
            </div>
            <div className="flex flex-col justify-center items-center ">
                {players.map((player, index) => (
                    // Render the player's name as an option only if it's not the current player
                    (index !== currentIndex) && (
                        <div
                            key={index}
                            onClick={() => handleVote(index)}
                            className="mt-3 w-1/4 text-white text-center text-3xl border-2 border-white p-3 rounded-xl cursor-pointer"
                        >
                            {player.name}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
