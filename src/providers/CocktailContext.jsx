import { createContext, useState, useEffect } from "react";
import { removeText, toNumber, addDash } from "../scripts/sanitize.js";
import * as d3 from "d3";

const CocktailContext = createContext(null);

export const CocktailProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.json("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=pornstar")
      .then((data) => {
        const ingredients = [];
        const measure = [];

        console.log(data);

        data.drinks.forEach((obj) => {
          const firstIngr = obj["strIngredient1"];
          const secondIngr = obj["strIngredient2"];
          const thirdIngr = obj["strIngredient3"];
          const fourthIngr = obj["strIngredient4"];
          const fifthIngr = obj["strIngredient5"];

          const firstMeasure = obj["strMeasure1"];
          const secondMeasure = obj["strMeasure2"];
          const thirdMeasure = obj["strMeasure3"];
          const fourthMeasure = obj["strMeasure4"];
          const fifthMeasure = obj["strMeasure5"];

          ingredients.push(
            firstIngr,
            secondIngr,
            thirdIngr,
            fourthIngr,
            fifthIngr
          );
          measure.push(
            firstMeasure,
            secondMeasure,
            thirdMeasure,
            fourthMeasure,
            fifthMeasure
          );
        });

        const stringNumber = removeText(measure);
        const measureNumber = toNumber(stringNumber);
        const dashedIngredient = addDash(ingredients);

        const newData = [
          {
            type: `${dashedIngredient[0]}`,
            value: measureNumber[0],
            color: "#581845",
          },
          {
            type: `${dashedIngredient[1]}`,
            value: measureNumber[1],
            color: "#C70039",
          },
          {
            type: `${dashedIngredient[2]}`,
            value: measureNumber[2],
            color: "#FFC300",
          },
          {
            type: `${dashedIngredient[3]}`,
            value: measureNumber[3],
            color: "#DAF7A6",
          },
          {
            type: `${dashedIngredient[4]}`,
            value: measureNumber[4],
            color: "#FF5733",
          },
        ];

        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CocktailContext.Provider value={data}>{children}</CocktailContext.Provider>
  );
};

export default CocktailContext;
