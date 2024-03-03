import { useEffect, useState } from "react";
import arrow from "../../imgs/down.png"
import welcome from "../../imgs/welcome3.jpg"
import mobile from "../../imgs/welcomeMobile.jpg"
export default function Welcome(){
    const [size,setSize]=useState(null)
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
        <div 
        style={{
            backgroundSize: size <= 768 ? '100% 100%' : 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage:
                size <= 768 ? `url(${mobile})`
                : `url(${welcome})`
        }} 
        className="welcome flex justify-center items-center pl-5 h-screen ">
            <div className="flex flex-col justify-center">
                <p className="title text-white text-4xl">Dive into a world of enjoyment</p>
                <p className="text-[#d1dde7] text-2xl">and challenge yourself with our selection of engaging games!</p>
            </div>
            <img src={arrow} className="absolute bottom-3"></img>
        </div>
    )
}