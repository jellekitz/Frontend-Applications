import { useContext } from "react";
import CocktailContext from "../../providers/CocktailContext";

const FilterMeasure = () => {
  const data = useContext(CocktailContext);

  if (!data) {
    return <p className="filter__measure">Inhoud van Cocktail: niks</p>;
  }

  const result = data.map((obj) => obj.value);
  const sum = result[0] + result[1] + result[2] + result[3] + result[4] + " cl";

  return <p className="filter__measure">Inhoud van Cocktail: {sum}</p>;
};

export default FilterMeasure;
