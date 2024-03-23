import { useState } from "react"
import { useTranslation } from "../../../context/translation"

export default function MinCategory({ handleSubmit }) {
    const { t } = useTranslation();
    const [categories] = useState([
        {
            id: 0,
            title: "series"
        },
        {
            id: 1,
            title: "football"
        },
        {
            id: 2,
            title: "movies"
        },
        {
            id: 3,
            title: "drinks"
        },
        {
            id: 4,
            title: "food"
        },
        {
            id: 5,
            title: "politics"
        },
    ])

    return (
        <div className="h-full flex flex-col pt-10 items-center">
            <div className="text-white text-2xl pb-10 text-center">
                {t("min-category")}
            </div>
            <div className="flex sm:w-1/2 flex-wrap">
                {
                    categories.map((category) => (
                        <div className="w-[33%] mb-3 flex justify-center">
                            <div onClick={() => { handleSubmit(2, category.id) }} className="cursor-pointer flex justify-center items-center p-3 w-16 h-16 border-2 rounded-xl border-white text-white hover:border-[#27f5d1]">
                                {t("min-category-" + category.title)}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}