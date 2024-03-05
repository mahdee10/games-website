import GamePoster from "./gamesPoster";
import tic from "../../imgs/tic.jpg"
import bara from "../../imgs/bara.webp"
import wordle from "../../imgs/wordle.webp"
import { useState } from "react";
export default function Games() {
    const [games] =useState([
        {
            title: "game-tic",
            src: tic,
            published:false
        },
        {
            title: "game-bara",
            src: bara,
            published:true

        },
        {
            title: "game-wordle",
            src: wordle,
            published:false

        },
        

        

    ])
    return (
        <div className="games h-screen bg-black flex sm:justify-center sm:items-center sm:px-24 px-3">
            <div className="sm:h-1/2 h-[50%] w-full flex  flex-wrap  justify-between items-center sm:py-0 py-20">
                {
                    games.map((game) => (
                        <GamePoster published={game.published} showTitle={game.showTitle} title={game.title} key={game.title} src={game.src}></GamePoster>

                    ))
                }
            </div>
        </div>
    )
}