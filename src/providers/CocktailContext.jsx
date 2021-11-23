import { createContext, useState, useEffect } from "react";

const CocktailContext = createContext(null);

export const CocktailProvider = ({ children }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=pornstar")
      .then((res) => res.json())
      .then((cocktailData) => {
        setData(cocktailData.drinks[0]);

        // cocktailData.drinks.forEach((obj) => {

        // });

        // console.log(cocktailData);
      });
  }, []);

  return (
    <CocktailContext.Provider value={data}>{children}</CocktailContext.Provider>
  );
};

export default CocktailContext;
