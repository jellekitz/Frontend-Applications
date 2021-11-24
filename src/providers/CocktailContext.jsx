import { createContext, useState, useEffect } from "react";
import * as d3 from "d3";

const CocktailContext = createContext(null);

export const CocktailProvider = ({ children }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    d3.json(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=pornstar"
    ).then((data) => {
      setData(data.drinks[0]);

      // data.drinks.forEach((obj) => {});

      // console.log(data);
    });
  }, []);

  return (
    <CocktailContext.Provider value={data}>{children}</CocktailContext.Provider>
  );
};

export default CocktailContext;
