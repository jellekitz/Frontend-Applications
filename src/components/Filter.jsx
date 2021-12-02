import Title from "../components/Title";
import FilterTitle from "./filter/Filter-title";
import FilterMeasure from "./filter/Filter-measure";
import FilterIngredients from "./filter/Filter-ingredients";

// Importeren alle benodigheden van het filter zoals: cocktail title, hoeveelheid van de cocktail, filter title en de ingredienten in een div.

const Filter = () => {
  return (
    <div className="filter__wrapper">
      <Title />
      <FilterMeasure />
      <FilterTitle />
      <FilterIngredients />
    </div>
  );
};

export default Filter;
