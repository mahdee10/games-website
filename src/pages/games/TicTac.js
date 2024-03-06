import { useState } from "react";
import GameContainer from "../../shared/gamesContainer";
import PlayersForm from "../../components/games/tictac/playersForm";
import TicStart from "../../components/games/tictac/gameStart";

export default function TicTac() {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [step,setStep]=useState(0);
    const handleSubmit=(place)=>{
        setStep(place)
    }
    return (
        <GameContainer>
            <div className="h-full">
                {
                step===0?
                <PlayersForm
                    player1={player1}
                    player2={player2}
                    handleSubmit={handleSubmit}
                    setPlayer1={setPlayer1}
                    setPlayer2={setPlayer2}
                />
                :
                step===1?
                <TicStart></TicStart>
                :
                null
}
            </div>
        </GameContainer>
    )
}