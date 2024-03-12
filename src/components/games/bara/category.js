import { useState } from "react"

export default function MinCategory({ handleSubmit }) {
    const [categories] = useState([
        "series",
        "football",
        "movies",
        "drinks",
        "food",
        "clothes",
    ])
    return (
        <div className="w-full h-full flex justify-center sm:items-center">
            <div className="flex justify-between sm:w-1/2 h-1/2  flex-wrap sm:mt-0 mt-10">
                <h3 className="sm:text-4xl text-2xl font-black text-white text-center w-full py-5 mb-5">Choose a Category</h3>

                {
                    categories.map((category) => (
                        <div className="w-[33%] mb-3 flex justify-center">
                            <div onClick={()=>{handleSubmit(1,category)}} className="cursor-pointer flex justify-center items-center p-3 w-16 h-16 border-2 rounded-xl border-white text-white">
                                {category}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}