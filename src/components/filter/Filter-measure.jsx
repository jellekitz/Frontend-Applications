import { useContext } from "react";
import CocktailContext from "../../providers/CocktailContext";

const FilterMeasure = () => {
  // Gebruik maken van de cocktailContext (zie providers/cocktailContext)
  const data = useContext(CocktailContext);

  // Als er geen data is dan returnen we een andere waarde
  if (!data) {
    return (
      <p className="filter__measure">Inhoud van Cocktail: Geen resultaat</p>
    );
  }

  // Het uitrekenen van de values van alle ingredienten
  const result = data.map((obj) => obj.value);
  const sum = result[0] + result[1] + result[2] + result[3] + result[4] + " cl";

  // Het returnen van de inhoud van de cocktail
  return <p className="filter__measure">Inhoud van Cocktail: {sum}</p>;
};

export default FilterMeasure;
