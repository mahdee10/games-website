import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../../context/translation";
import Langauge from "./langauge";
import { Helmet } from "react-helmet";
export default function Navbar() {

    const location = useLocation();
    const [pathname, setPathname] = useState(location.pathname);
    const { RTL } = useTranslation();
    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Madimi+One&display=swap" rel="stylesheet" />
            </Helmet>
            <nav className={`order-1 w-full top-0 left-0  navbar pb-5 z-10 fixed sm:px-5 px-3`}>
                <div className={`max-w-screen-xl flex flex-wrap justify-between  items-center  mx-auto ${RTL ? "flex-row-reverse" : ""}`}>
                    <Link to="/" className={`block text-center logo  no-underline text-white sm:py-1 h-full leading-8  py-3.5 italic font-extrabold ${pathname === '/' ? '' : ''}`}><span className="text-white text-3xl">L3eeb</span></Link>
                    <Langauge></Langauge>
                </div>
            </nav>
        </>
    )
}