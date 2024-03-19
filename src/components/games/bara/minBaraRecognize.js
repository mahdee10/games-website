import React, { useState } from "react";
import GivePhone from "./givePhone";
import PlayerRecognition from "./playerRecognition";
import { useMinCategory } from "../../../context/minCategoryContext";

export default function MinBaraRecognize({ imposter, players, handleEndPlayers }) {
    const { chosenWord } = useMinCategory()
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [currentStep, setCurrentStep] = useState(true);
    function handleNextPlayer() {
        if (currentPlayerIndex < players.length) {
            setCurrentPlayerIndex(currentPlayerIndex + 1);
        }

        if (currentPlayerIndex + 1 < players.length) {
            setCurrentStep((prev) => { setCurrentStep(!prev) })
        }
        else {
            handleEndPlayers()
        }

    }
    function handleNextStep() {
        setCurrentStep((prev) => { setCurrentStep(!prev) })
    }

    return (
        <>
            {currentStep ? (
                <GivePhone
                    player={players[currentPlayerIndex]}
                    handleNextStep={handleNextStep}
                />
            ) : (
                <PlayerRecognition
                    player={players[currentPlayerIndex]}
                    onNext={handleNextPlayer}
                    chosenWord={chosenWord}
                    imposter={imposter}
                />
            )}
        </>
    );
}
