import { useState } from "react";
import { useTranslation } from "../../../context/translation";
import trash from "../../../imgs/trash.png"
export default function MinForm({ players, setPlayers }) {
    const { t, RTL } = useTranslation();
    const [input, setInput] = useState("")

    function handleSubmit() {
        if(input){
            const pl = {
                name: input,
                score: 0,
                online: false
            }
            const modifiedPlayers = [...players, pl]
            setPlayers(modifiedPlayers);
            setInput("")
        }
        
    }
    function handleDelete(playerDelete){
        const filteredPlayers=players.filter((pl)=> pl.name!==playerDelete.name)
        setPlayers(filteredPlayers)
    }
    return (
        <div className="h-full flex flex-col pt-10">
            <div className="text-white text-2xl pb-10 text-center">
                {t("tic-form-title")}
            </div>
            <div className="h-full flex flex-col  items-center ">
                <div className="sm:w-1/2 flex justify-center  items-center mb-5 ">
                    <input
                        value={input}
                        onChange={(e) => { setInput(e.target.value) }}
                        className="bg-transparent text-white border-2 border-white rounded-xl p-3 "
                        placeholder="player"
                        dir={RTL ? "rtl" : "ltr"}
                    />
                    -
                    <button
                        onClick={() => handleSubmit()}
                        className={`rounded-xl p-2 w-24 font-bold text-white border-2 cursor-cursor-not-allowed border-[#b9004e] `}>
                        ADD
                    </button>
                </div>


                <div className="sm:w-1/4 w-full h-60 overflow-y-auto scrollbar-hidden px-5 ">
                    {
                        players.map((player) => (
                            <div className="mt-5 text-white p-3 border-2 w-full border-white rounded-xl flex justify-between items-center">
                                {player.name}
                                <img onClick={() => handleDelete(player)} alt="trash" className="w-fit h-7 cursor-pointer trash" src={trash}></img>
                                </div>
                        ))
                    }
                </div>
                <div className="text-white text-2xl pt-10 text-center">
                    <button
                        onClick={() => handleSubmit()}
                        className={`rounded-xl p-2 w-fit  text-white border-2  border-[#b9004e] `}>
                        Start Game
                    </button>
                </div>
            </div>

        </div>
    )

}