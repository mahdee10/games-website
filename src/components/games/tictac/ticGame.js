import { useState } from "react"


export default function TicGame() {
    const [boxes]=useState([
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
    return (
        <div className="flex justify-center items-center top-0 left-0 w-full h-full">
            <div className="grid-container   sm:w-[350px] sm:h-[350px] w-[200px] h-[200px]">
                {
                    boxes.map(()=>(
                        <div className="border-2 border-white"></div>
                    ))
                }
            </div>
        </div>
    )
}