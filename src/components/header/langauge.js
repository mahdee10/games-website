import { useTranslation } from "../../context/translation"
import usa from "../../imgs/usa.png"
import leb from "../../imgs/leb.png"
export default function Langauge() {
    const { setLocale } = useTranslation();
    return (
        <div className="flex">
            <img src={leb} className="sm:w-10 sm:h-10 w-6 h-6 mr-2 cursor-pointer" alt="lebanon" onClick={()=>setLocale("ar")}></img>
            <img src={usa} className="sm:w-10 sm:h-10 w-6 h-6 cursor-pointer" alt="USA" onClick={()=>setLocale("en")}></img>
        </div>
    )
}