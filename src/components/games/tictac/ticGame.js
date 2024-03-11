import { useCallback, useEffect, useState } from "react"
import TicCountDown from "./countDown"
import WinnerTic from "./winnerTic"
import { useTranslation } from "../../../context/translation"


export default function TicGame({ player1, player2 }) {
    const [turn, setTurn] = useState(false)
    const [gameEnds, setGameEnds] = useState(false)
    const [winner, setWinner] = useState(0)
    const [results, setResults] = useState({
        player1:0,
        player2:0,
    })
    const initialBoxesState = [
        { id: 1, clicked: false, value: "" },
        { id: 2, clicked: false, value: "" },
        { id: 3, clicked: false, value: "" },
        { id: 4, clicked: false, value: "" },
        { id: 5, clicked: false, value: "" },
        { id: 6, clicked: false, value: "" },
        { id: 7, clicked: false, value: "" },
        { id: 8, clicked: false, value: "" },
        { id: 9, clicked: false, value: "" },
    ];
    const [boxes, setBoxes] = useState(initialBoxesState);
    const { t, RTL } = useTranslation()
    const handleBoxClick = (id) => {

        const updatedBoxes = boxes.map(box => {
            if (box.id === id) {
                return { ...box, clicked: true, value: turn ? "x" : "o" };
            }
            return box;
        });
        setBoxes(updatedBoxes);
        setTurn(!turn)

        checkResult()
    };

    function playagain() {
        setBoxes(initialBoxesState);
        setTurn(false);
        setWinner(0);
        setGameEnds(false)
    }

    const checkResult = useCallback(() => {
        if (
            (boxes[0].value === boxes[1].value && boxes[1].value === boxes[2].value && boxes[0].value !== "") ||
            (boxes[3].value === boxes[4].value && boxes[4].value === boxes[5].value && boxes[3].value !== "") ||
            (boxes[6].value === boxes[7].value && boxes[7].value === boxes[8].value && boxes[6].value !== "") ||
            (boxes[0].value === boxes[3].value && boxes[3].value === boxes[6].value && boxes[0].value !== "") ||
            (boxes[1].value === boxes[4].value && boxes[4].value === boxes[7].value && boxes[1].value !== "") ||
            (boxes[2].value === boxes[5].value && boxes[5].value === boxes[8].value && boxes[2].value !== "") ||
            (boxes[0].value === boxes[4].value && boxes[4].value === boxes[8].value && boxes[0].value !== "") ||
            (boxes[2].value === boxes[4].value && boxes[4].value === boxes[6].value && boxes[2].value !== "")
        ) {
            if (!turn) {
                setResults((prevResults)=>({
                    ...prevResults,player1:prevResults.player1+1
                }))
                setGameEnds(true)
                setWinner(1);
                console.log("jh")
            } else {
                setResults((prevResults)=>({
                    ...prevResults,player2:prevResults.player2+1
                }))
                setGameEnds(true)
                setWinner(2);
            }
        }
        else if (boxes.every(box => box.clicked)) {
            setGameEnds(true)
            setWinner(3)
        }

    }, [boxes, turn]);

    useEffect(() => {
        console.log(gameEnds)
    }, [gameEnds])
    useEffect(() => {
        checkResult();
    }, [boxes, checkResult]);
    return (
        <div className="ad py-5 h-full">
            <div className="flex justify-center sm:px-24 px-5 order-3 pt-10">
                {/* <h3  className={` text-3xl font-black ${!gameEnds? (turn  ? "text-[#b9004e]" : "text-white"):"text-white"} `}>{player1}</h3>
                <h3  className={` text-3xl font-black ${!gameEnds? (!turn  ? "text-[#b9004e]" : "text-white"):"text-white"} `}>{player2}</h3> */}
                {!gameEnds && <h3 className={` text-3xl font-black text-[#b9004e]`}>{turn ? player1 : player2} {!RTL ? "'s" : ""} {t("tic-turn")}</h3>}
            </div>
            <div className="flex justify-center  items-center top-0 left-0 w-full  relative order-2">
                <div className="grid-container   sm:w-[350px] sm:h-[350px] w-[200px] h-[200px]">
                    {
                        boxes.map((box) => (
                            <div onClick={() => { if (winner === 0 && !box.clicked) handleBoxClick(box.id) }} className={`${winner === 0 ? "cursor-pointer" : ""} border-2 border-white flex justify-center items-center`}>
                                {
                                    box.clicked && <div className="text-white text-4xl ">{box.value}</div>

                                }
                            </div>
                        ))
                    }
                </div>
                <TicCountDown></TicCountDown>
                {winner !== 0 && <WinnerTic playagain={playagain} winner={winner === 1 ? player1 : winner === 2 ? player2 : "Draw"}></WinnerTic>}
            </div>
            <div className="flex items-center justify-between order-1 sm:px-24 px-5">
                <div className="flex flex-col">
                    <h3 className={` text-center  sm:text-3xl text-2xl font-black text-white`}>{player1}</h3>
                    <h3 className={`  text-center  sm:text-2xl text-xl font-black  text-white`}>{results.player1}</h3>
                </div>
                <div className="flex flex-col">
                    <h3 className={` text-center  sm:text-3xl text-2xl font-black text-white`}>{player2}</h3>
                    <h3 className={`  text-center  sm:text-2xl text-xl font-black  text-white`}>{results.player2}</h3>
                </div>
            </div>
        </div>
    )
}