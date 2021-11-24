import FilterTitle from "./filter/Filter-title.js";
import FilterMeasure from "./filter/Filter-measure.js";
import FilterIngredients from "./filter/Filter-ingredients.js";

const Filter = () => {
  return (
    <>
      <FilterTitle />
      <FilterMeasure />
      <FilterIngredients />
    </>
  );
};

export default Filter;
