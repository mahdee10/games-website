import { useState } from "react";
import GameContainer from "../../shared/gamesContainer";
import MinForm from "../../components/games/bara/minForm";
import MinCategory from "../../components/games/bara/category";
import { useMinCategory } from "../../context/minCategoryContext";
import MinBaraRecognize from "../../components/games/bara/minBaraRecognize";
import MinQuestions from "../../components/games/bara/minQuestions";

export default function MinBara() {
    const {handleChooseWord}=useMinCategory()
    const [players, setPlayers] = useState([]);
    const [step, setStep] = useState(0);
    const [imposter, setImposter] = useState("");
    const handleSubmit = (place,id) => {
        setStep(place)
        handleChooseWord(id)
    }
    const handleSubmitForm=(place)=>{
        setStep(place)
        const randomNumber = Math.floor(Math.random() * players.length);
        console.log(players.length)
        console.log(randomNumber)
        setImposter(players[randomNumber])
        console.log(players[randomNumber]," imposter")
    }
    function handleEndPlayers(){
        setStep(3)
    }
    function handleStep(){
        setStep(step+1)
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
                        step===2?
                        <MinBaraRecognize imposter={imposter} handleEndPlayers={handleEndPlayers} players={players}></MinBaraRecognize>
                        :
                        step===3?
                        <MinQuestions handleStep={handleStep} players={players}></MinQuestions>
                        :null 
                }
            </div>
        </GameContainer>
    )
}