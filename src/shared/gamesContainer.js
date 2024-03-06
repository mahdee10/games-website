export default function GameContainer({ children }) {
    return (
        <div className="md:px-16 sm:px-10 flex mt-14">
            <div className="sm:border-2 border-white rounded-xl w-full game-container">
                {children}
            </div>
        </div>
    )
}