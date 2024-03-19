import { useState } from "react"

export default function MinQuestions({ players, handleStep }) {
    const [palyer1, setPlayer1] = useState(players[0].name)
    const [palyer2, setPlayer2] = useState(players[1].name)
    const [playersIndex, setIndex] = useState(1)
    // const [playersShuffled, setShuffled] = useState(players)
    function next() {
        const nextIndex = (playersIndex + 1) % players.length;
        setPlayer1(players[playersIndex].name);
        setPlayer2(players[nextIndex].name)
        setIndex(nextIndex);
    }
    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     console.log(array)
    //     return array;
    // }
    function handleVote() {
        handleStep(4)
    }
    return (
        <div className="h-full flex flex-col justify-center ">
            <div className="text-white text-center text-3xl">
                {palyer1} ask {palyer2}
            </div>
            <div className="flex justify-center mt-3">
                <div className="welcome-btn p-1  border-2 mt-5  border-[#fb3690] w-fit h-fit self-center rounded-tl-xl rounded-br-xl">
                    <button className="sm:w-44 w-32 text-white border-2 font-bold border-[#fb3690] p-2 rounded-tl-xl rounded-br-xl" onClick={() => handleVote()}>Vote</button>
                </div>
                <div className="welcome-btn p-1  border-2 mt-5  border-[#fb3690] w-fit h-fit self-center rounded-tl-xl rounded-br-xl">
                    <button className="sm:w-44 w-32 text-white border-2 font-bold border-[#fb3690] p-2 rounded-tl-xl rounded-br-xl" onClick={() => next()}>Next</button>
                </div>
            </div>

        </div>
    )
}