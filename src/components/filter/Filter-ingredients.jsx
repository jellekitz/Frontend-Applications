import { useContext } from "react";
import CocktailContext from "../../providers/CocktailContext";

const FilterIngredients = () => {
  const data = useContext(CocktailContext);

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

  return (
    <ul className="filter__ingredients">
      <ListTag />
    </ul>
  );
};

export default FilterIngredients;
