import { useEffect, useState } from "react";

export default function WinnerTic({winner}){
    const [count, setCount] = useState(3);
    const [showResult, setShowResult] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            if (count > 1) {
                setCount((prevCount) => prevCount - 1);
            } else {
                setShowResult(false);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);
    return (
        <>
            {showResult && (
                <div className={`text-5xl absolute text-white count-overlay flex justify-center items-center top-0 left-0 w-full h-full`}>
                    {winner} wins
                </div>
            )}
        </>
    )
}