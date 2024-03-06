import { useCallback, useEffect, useState } from "react"
import TicCountDown from "./countDown"
import WinnerTic from "./winnerTic"


export default function TicGame({ player1, player2 }) {
    const [turn, setTurn] = useState(false)
    const [winner, setWinner] = useState(0)
    const [boxes, setBoxes] = useState([
        {
            id: 1,
            clicked: false,
            value: ""
        },
        {
            id: 2,
            clicked: false,
            value: ""
        },
        {
            id: 3,
            clicked: false,
            value: ""
        },
        {
            id: 4,
            clicked: false,
            value: ""
        },

        {
            id: 5,
            clicked: false,
            value: ""
        }, {
            id: 6,
            clicked: false,
            value: ""
        },
        {
            id: 7,
            clicked: false,
            value: ""
        },
        {
            id: 8,
            clicked: false,
            value: ""
        },
        {
            id: 9,
            clicked: false,
            value: ""
        },

    ])
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
                setWinner(1);
                console.log(player1)
            } else {
                setWinner(2);
            }
        }
    }, [boxes, turn]);

    useEffect(() => {
        checkResult();
    }, [boxes, checkResult]);
    return (
        <div className="ad py-5 h-full">
            <div className="flex justify-between sm:px-24 px-5 sm:order-1 order-2">
                <h3 className={` text-3xl font-black ${turn  ? "text-[#b9004e]" : "text-white"}`}>{player1}</h3>
                <h3 className={` text-3xl font-black ${!turn ? "text-[#b9004e]" : "text-white"}`}>{player2}</h3>
            </div>
            <div className="flex justify-center  items-center top-0 left-0 w-full  relative sm:order-2 order-1">
                <div className="grid-container   sm:w-[350px] sm:h-[350px] w-[200px] h-[200px]">
                    {
                        boxes.map((box) => (
                            <div onClick={() => { if(winner===0 && !box.clicked)handleBoxClick(box.id)}} className={`${winner===0 ? "cursor-pointer":""} border-2 border-white flex justify-center items-center`}>
                                {
                                    box.clicked && <div className="text-white text-4xl ">{box.value}</div>

                                }
                            </div>
                        ))
                    }
                </div>
                <TicCountDown></TicCountDown>
                {winner!==0&&<WinnerTic winner={winner===1? player1:player2}></WinnerTic>}
            </div>
        </div>
    )
}