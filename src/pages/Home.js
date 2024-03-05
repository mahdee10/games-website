import { useRef } from "react";
import Welcome from "../components/home/welcome";
import Games from "../components/home/games";


export default function Home() {
    const welcome = useRef();
    const games = useRef();
    function ScrollTo(section) {
        section.current.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className="home ">
            <div ref={welcome}>
                <Welcome intoRef={games} ScrollTo={ScrollTo}></Welcome>
            </div>
            <div ref={games}>
                <Games></Games>
            </div>
        </div>
    )
}