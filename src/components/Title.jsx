import { useContext } from "react";
import ApiContext from "../providers/ApiContext";

const Title = () => {
  const data = useContext(ApiContext);
  return <h1 className="cocktail__title">{data?.strDrink}</h1>;
};

export default Title;
