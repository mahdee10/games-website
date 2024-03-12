import React, { useState, useEffect } from 'react';
import { useTranslation } from "../../../context/translation";
import abo from "../../../imgs/abo.mp4"
export default function WinnerTic({ winner, playagain }) {
    const { t, RTL } = useTranslation();
    const [showVideo, setShowVideo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showVideo && (
                <div  className={`text-5xl absolute text-white count-overlay flex flex-col justify-center items-center top-0 left-0 w-full h-full`}>

                    <video playsInline  className='w-1/2 h-1/2' autoPlay>
                        <source src={abo} type="video/mp4" />
                    </video>
                </div>
            )}
            {!showVideo && (
                <div dir={RTL ? "rtl" : "ltr"} className={`text-5xl absolute text-white count-overlay flex flex-col justify-center items-center top-0 left-0 w-full h-full`}>
                    {winner} {winner === t("tic-draw") ? "" : t("tic-wins")}

                    <button
                        onClick={() => playagain()}
                        className={`rounded-xl mt-10 text-xs p-2 w-26 font-bold text-white border-2 justify-self-end  border-[#b9004e]`}
                    >
                        {t("tic-again")}
                    </button>
                </div>
            )}
        </>
    );
}
