
export default function WinnerTic({ winner,playagain }) {


    return (
        <>
           
                <div className={`text-5xl absolute text-white count-overlay flex flex-col justify-center items-center top-0 left-0 w-full h-full`}>
                    {winner} {winner === "Draw" ? "" : "wins"}
                    
                        
                            <button
                                onClick={() => playagain()}
                                className={`rounded-xl mt-10 text-xs p-2 w-26 font-bold text-white border-2 justify-self-end  border-[#b9004e]`}>
                                Play Again
                            </button>
                        
                    
                </div>
            
        </>
    )
}