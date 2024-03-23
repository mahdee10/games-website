import { createContext, useState, useContext } from "react";

const MinCategoryContext = createContext(null);

const MinCategoryProvider = ({ children }) => {
  const [chosenWord, setChosenWord] = useState("")
  const [categories, setCategories] = useState("")
  const categoriesContent = [
    {
      id: 0,
      values: [
        "babHara",
        "day3a",
        "5rbi"
      ]
    },
    {
      id: 1,
      values: [
        "messi",
        "neymar",
        "suarez"
      ]
    },
    {
      id: 2,
      values: [
        "scream",
        "fast and furious",
        "harry potter"
      ]
    },
    {
      id: 3,
      values: [
        "pepsi",
        "cola",
        "rc"
      ]
    },
    {
      id: 4,
      values: [
        "mlfof",
        "mjdara",
        "kbsi"
      ]
    },
    {
      id: 5,
      values: [
        "3on",
        "baseel",
        "hariri"
      ]
    },
  ]

  function handleChooseWord(id) {
    setCategories(categoriesContent[id].values)
    const findCategory = categoriesContent.find((item) => item.id === id)
    if (findCategory) {
      const randomNumber = Math.floor(Math.random() * findCategory.values.length);;
      setChosenWord(findCategory.values[randomNumber])
      console.log(findCategory.values[randomNumber])
    }

  }

  return (
    <MinCategoryContext.Provider value={{ handleChooseWord,chosenWord,categories }}>
      {children}
    </MinCategoryContext.Provider>
  );
};

const useMinCategory = () => useContext(MinCategoryContext);

export { MinCategoryProvider, useMinCategory };
