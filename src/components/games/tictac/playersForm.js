export default function PlayersForm({ player1, setPlayer1, setPlayer2, player2, handleSubmit }) {
    return (
        <div className="h-full flex flex-col justify-center">
            <div className="text-white text-2xl pb-10 text-center">
                Enter Players Names
            </div>
            <div className="flex justify-center flex-col items-center">
                <input
                    value={player1}
                    onChange={(e) => { setPlayer1(e.target.value) }}
                    className="bg-transparent text-white border-2 border-white rounded-xl p-3 mb-5"
                    placeholder="Player 1"
                />
                <input
                    value={player2}
                    onChange={(e) => { setPlayer2(e.target.value) }}
                    className="bg-transparent text-white border-2 border-white rounded-xl p-3 mb-5 "
                    placeholder="Player 2"
                />
                <button
                    disabled={!player1 || !player2}
                    style={{ cursor: (!player1 || !player2) ? "not-allowed" : "pointer" }}
                    onClick={() => handleSubmit(1)}
                    className={`rounded-xl p-2 w-24 font-bold text-white border-2 cursor-cursor-not-allowed border-[#b9004e] ${!player1 || !player2 ? "cursor-cursor-not-allowed" : ""}`}>
                    Next
                </button>
            </div>
        </div>
    )
}