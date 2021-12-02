import { useContext } from "react";
import CocktailContext from "../../providers/CocktailContext";

const FilterIngredients = () => {
  // Gebruik maken van de cocktailContext (zie providers/cocktailContext)
  const data = useContext(CocktailContext);

  // Aanmaken van een list per ingredient
  const ListTag = () =>
    data.map((obj) => (
      <li key={obj.type} className="filter__ingredient">
        <span
          className="filter__ingredient-color"
          style={{ backgroundColor: obj.color }}
        ></span>
        <p className="filter__ingredient-title">{obj.type}</p>
        <input
          className="filter__ingredient-input"
          name={obj.type}
          type="checkbox"
        ></input>
      </li>
    ));

  //return de lists binnen een ul
  return (
    <ul className="filter__ingredients">
      <ListTag />
    </ul>
  );
};

export default FilterIngredients;
