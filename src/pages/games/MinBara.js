import { useState } from "react";
import GameContainer from "../../shared/gamesContainer";
import MinForm from "../../components/games/bara/minForm";
import MinCategory from "../../components/games/bara/category";

export default function MinBara() {
    // const [players, setPlayers] = useState([
    //     {
    //         name: "",
    //         score: 0,
    //         online: false
    //     }
    // ]);
    const [step, setStep] = useState(0);
    const [category, setCategory] = useState("");
    const handleSubmit = (place,cat) => {
        setStep(place)
        setCategory(cat)
    }
    return ( 
        <GameContainer>
            <div className="h-full">
                {
                    step === 0 ?
                        <MinCategory handleSubmit={handleSubmit}></MinCategory>
                        :
                        step === 1 ?
                            <MinForm category={category}></MinForm>
                            :
                            null
                }
            </div>
        </GameContainer>
    )
}