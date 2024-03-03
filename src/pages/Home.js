import { useEffect, useRef } from "react";
import Welcome from "../components/home/welcome";


export default function Home() {
 
    return (
        <div className="home">
            <Welcome></Welcome>
            <Welcome></Welcome>
        </div>
    )
}