import { useState } from "react";
import GameContainer from "../../shared/gamesContainer";
import MinForm from "../../components/games/bara/minForm";
import MinCategory from "../../components/games/bara/category";
import { useMinCategory } from "../../context/minCategoryContext";
import MinBaraRecognize from "../../components/games/bara/minBaraRecognize";
import MinQuestions from "../../components/games/bara/minQuestions";
import MinQuestions2 from "../../components/games/bara/minQuestion2";
import MinVote from "../../components/games/bara/vote";
import ShowImposter from "../../components/games/bara/showImposter";
import ImposterGuess from "../../components/games/bara/imposterGuess";
import ShowResults from "../../components/games/bara/results";

export default function MinBara() {
    const { handleChooseWord } = useMinCategory()
    const [players, setPlayers] = useState([]);
    const [step, setStep] = useState(0);
    const [imposter, setImposter] = useState("");
    const handleSubmit = (place, id) => {
        setStep(place)
        handleChooseWord(id)
    }
    const handleSubmitForm = (place) => {
        setStep(place)
        const randomNumber = Math.floor(Math.random() * players.length);
        console.log(players.length)
        console.log(randomNumber)
        setImposter(players[randomNumber])
        console.log(players[randomNumber], " imposter")
    }
    function handleEndPlayers() {
        setStep(3)
    }
    function handleStep(num) {
        setStep(num)
    }
    function updateScores(newPlayers) {
        setPlayers(newPlayers)
    }
    function changeImposter(){
        const randomNumber = Math.floor(Math.random() * players.length);
        setImposter(players[randomNumber])
    }
    return (
        <GameContainer>
            
            <div className="h-full">
                {
                    step === 1 ?
                        <MinCategory handleSubmit={handleSubmit}></MinCategory>
                        :
                        step === 0 ?
                            <MinForm handleSubmitForm={handleSubmitForm} players={players} setPlayers={setPlayers} ></MinForm>
                            :
                            step === 2 ?
                                <MinBaraRecognize imposter={imposter} handleEndPlayers={handleEndPlayers} players={players}></MinBaraRecognize>
                                :
                                step === 3 ?
                                    <MinQuestions handleStep={handleStep} players={players}></MinQuestions>
                                    :
                                    step === 4 ?
                                        <MinQuestions2 handleStep={handleStep} players={players}></MinQuestions2>
                                        :
                                        step === 5 ?
                                            <MinVote updateScores={updateScores} imposter={imposter} handleStep={handleStep} players={players}></MinVote>
                                            :
                                            step === 6 ?
                                                <ShowImposter imposter={imposter} handleStep={handleStep} players={players}></ShowImposter>
                                                :
                                                step === 7 ?
                                                    <ImposterGuess updateScores={updateScores} imposter={imposter} handleStep={handleStep} players={players}></ImposterGuess>
                                                    :
                                                    step === 8 ?
                                                        <ShowResults changeImposter={changeImposter} handleStep={handleStep} players={players}></ShowResults>
                                                        : null
                }
            </div>
        </GameContainer>
    )
}