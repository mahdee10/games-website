import { Link } from "react-router-dom";
import { useTranslation } from "../../context/translation";
import { useEffect, useState } from "react";

export default function GamePoster({ src, title, published, path}) {
    const { t } = useTranslation();
    const [hidden, setHidden] = useState(true)
    const [size,setSize]=useState(null);
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
            if(window.innerWidth<720){
                setHidden(false)
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div
            onMouseEnter={() => {
                if (published && size>720) { setHidden(false) }
            }
            }
            onMouseLeave={() => {
                
                if (published && size>720) { setHidden(true) }
            }
            }
            className="mb-5 sm:mr-2 lg:w-[290px] lg:h-[200px] md:w-[250px] md:h-[200px] w-40 h-40 relative cursor-pointer game shrink-0">
            <img src={src} className={`w-full h-full ${published ? "game-img":"brightness-[0.3]"} ${size<720 && published ? "brightness-[0.8]":""}`}  alt="a"></img>
            {!hidden && published && <h4 className="w-full title text-center md:text-2xl md:text-xl text-base text-black absolute md:top-[40%] top-[30%] left-1/2 z-10 text-white transform -translate-x-1/2 -translate-y-1/2 ">{t(title)}</h4>}
            {!hidden && published && <Link to={path} className="border-2 border-white font-bold md:px-3 md:py-2 py-1 px-1 md:text-base text-sm rounded absolute top-[73%] left-1/2 z-10 text-white transform -translate-x-1/2 -translate-y-1/2 hover:bg-[#fb3690]">{t("game-play")}</Link>}
            {!published && <h4 className="w-full title text-center md:text-2xl sm:text-xl text-base text-black absolute top-[50%] left-1/2 z-10 text-white transform -translate-x-1/2 -translate-y-1/2 ">{t("game-soon")}</h4>}

        </div>
    )
}