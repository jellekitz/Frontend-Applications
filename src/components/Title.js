import { useContext } from "react";
import CocktailContext from "../providers/CocktailContext";

const Title = () => {
  const data = useContext(CocktailContext);

  return <h1 className="cocktail__title">{data?.strDrink}</h1>;
};

export default Title;
