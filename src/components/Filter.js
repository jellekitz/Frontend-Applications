import FilterTitle from "./filter/Filter-title.js";
import FilterMeasure from "./filter/Filter-measure.js";
import FilterIngredients from "./filter/Filter-ingredients.js";

const Filter = () => {
  return (
    <section>
      <FilterTitle />
      <FilterMeasure />
      <FilterIngredients />
    </section>
  );
};

export default Filter;