import { useState } from "react"
import TicCountDown from "./countDown"


export default function TicGame({ player1, player2 }) {
    const [boxes] = useState([
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ])
    // const [turn,setTurn]=useState(false);
    return (
        <div className="ad py-5 h-full">
            <div className="flex justify-between sm:px-24 px-5 sm:order-1 order-2">
                <h3 className="text-white text-3xl font-black">{player1}</h3>
                <h3 className="text-white text-3xl font-black">{player2}</h3>
            </div>
            <div className="flex justify-center  items-center top-0 left-0 w-full  relative sm:order-2 order-1">
                <div className="grid-container   sm:w-[350px] sm:h-[350px] w-[200px] h-[200px]">
                    {
                        boxes.map(() => (
                            <div className="border-2 border-white"></div>
                        ))
                    }
                </div>
                <TicCountDown></TicCountDown>
            </div>
        </div>
    )
}