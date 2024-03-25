import { createContext, useState, useContext } from "react";

const MinCategoryContext = createContext(null);

const MinCategoryProvider = ({ children }) => {
  const [chosenWord, setChosenWord] = useState("")
  const [categories, setCategories] = useState("")
  const categoriesContent = [
    {
      id: 0,
      values: [
        "min-bablhara",
        "min-zmnLbr8ot",
        "min-tashmatash",
        "min-day3aday3a",
        "min-5rbi",
        "min-haybi",
        "min-ardtayiba",
        "min-b23aldw2",
      ]
    },
    {
      id: 1,
      values: [
        "min-messi",
        "min-neymar",
        "min-suarez",
        "min-mbape",
        "min-dimaria",
        "min-ozil",
        "min-kaka",
        "min-iniesta",
        "min-xavi",
        "min-cristiano",
        "min-leva",
        "min-muller",
      ]
    },
    {
      id: 2,
      values: [
        "min-scream",
        "min-fast",
        "min-harrypoter",
        "min-shrek",
      ]
    },
    {
      id: 3,
      values: [
        "min-pepsi",
        "min-cola",
        "min-rc",
        "min-tea",
        "min-zhourat",
        "min-coffee",
        "min-lemonade",
        "min-avocado",
      ]
    },
    {
      id: 4,
      values: [
        "min-mlfof",
        "min-kbsi",
        "min-mnsf",
        "min-mjdara",
        "min-mshawi",
        "min-mlo5iyi",
        "min-m2lobk",
        "min-fasolya",
        "min-bemyi",
        "min-bazela",
        "min-wr23nb",
        "min-lbnemo",
      ]
    },
    {
      id: 5,
      values: [
        "min-s3d",
        "min-3on",
        "min-baseel",
        "min-sleiman",
        "min-seidhassan",
        "min-trump",
        "min-makron",
        "min-abo3byda",
        "min-ordogan",
        "min-wiam",
        "min-jnblat"
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
    <MinCategoryContext.Provider value={{ handleChooseWord, chosenWord, categories }}>
      {children}
    </MinCategoryContext.Provider>
  );
};

const useMinCategory = () => useContext(MinCategoryContext);

export { MinCategoryProvider, useMinCategory };
