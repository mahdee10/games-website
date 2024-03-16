
import { useTranslation } from "../../context/translation";
import { Helmet } from "react-helmet";
export default function Welcome2({ ScrollTo, intoRef }) {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Madimi+One&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="welcome flex justify-center items-center  h-screen relative sm:px-0 px-3">
                <div className="flex flex-col justify-center">
                    <p className="title text-[#27f5d1] text-center font-black sm:text-7xl text-4xl">{t("welcome-sentence1")}</p>
                    <p className="text-[#fb3690] mt-1 text-center font-black sm:text-4xl text-2xl">{t("welcome-sentence2")}</p>
                    <div className="welcome-btn p-1  border-2 mt-5  border-white w-fit h-fit self-center rounded-tl-xl rounded-br-xl">
                        <button className="sm:w-44 w-32 text-white border-2 font-bold border-white p-2 rounded-tl-xl rounded-br-xl" onClick={() => ScrollTo(intoRef)}>Play Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}