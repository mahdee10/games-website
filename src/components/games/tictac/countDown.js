import { useEffect, useState } from "react"

export default function TicCountDown() {
    const [count, setCount] = useState(3);
    const [showCount, setShowCount] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            if (count > 1) {
                setCount((prevCount) => prevCount - 1);
            } else {
                setShowCount(false);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);
    return (
        <>
            {showCount && (
                <div className={`text-5xl absolute text-white count-overlay flex justify-center items-center top-0 left-0 w-full h-full`}>
                    {count}
                </div>
            )}
        </>
    )
}