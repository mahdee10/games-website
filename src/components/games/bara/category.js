import { useState } from "react"

export default function MinCategory({ handleSubmit }) {
    const [categories] = useState([
        "series",
        "football",
        "movies",
        "drinks",
        "food",
        "politics",
    ])
    return (
        <div className="h-full flex flex-col pt-10 items-center">
            <div className="text-white text-2xl pb-10 text-center">
                Choose a Category
            </div>
            <div className="flex sm:w-1/2 flex-wrap">
                {
                    categories.map((category) => (
                        <div className="w-[33%] mb-3 flex justify-center">
                            <div onClick={() => { handleSubmit(1, category) }} className="cursor-pointer flex justify-center items-center p-3 w-16 h-16 border-2 rounded-xl border-white text-white hover:border-[#27f5d1]">
                                {category}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}