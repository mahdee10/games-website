import { useTranslation } from "../../context/translation"

export default function Langauge() {
    const { setLocale, RTL } = useTranslation();
    return (
        <select
            
            style={{ backgroundColor: "transparent", }}
            className={`px-3 cursor-pointer text-white`}
            onChange={(e) => setLocale(e.target.value)}
            value={RTL ? "ar" : "en"}
        >
            <option  value="en" className={"text-white"}>
                en
            </option>
            <option value="ar" className={"text-white"}>
                ar
            </option>
        </select>
    )
}