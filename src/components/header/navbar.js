import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../../context/translation";
import Langauge from "./langauge";
export default function Navbar() {

    const location = useLocation();
    const [pathname, setPathname] = useState(location.pathname);
    const { RTL } = useTranslation();
    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <nav className={` w-full sm:top-0 sm:left-0  navbar md:pb-5  fixed px-5`}>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@700&family=Jomhuria&family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
                <div className={`max-w-screen-xl flex flex-wrap justify-between  items-center  mx-auto ${RTL ? "flex-row-reverse" : ""}`}>
                    <Link to="/" className={`block text-center logo  no-underline text-white sm:py-1 h-full leading-8  py-3.5 italic font-extrabold ${pathname === '/' ? '' : ''}`}><span className="text-white text-3xl">L3eeb</span></Link>
                    <Langauge></Langauge>
                </div>
            </nav>
        </>
    )
}