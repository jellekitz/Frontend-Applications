import FilterTitle from "./filter/Filter-title";
import FilterMeasure from "./filter/Filter-measure";
import FilterIngredients from "./filter/Filter-ingredients";

const Filter = () => {
  return (
    <>
      <FilterMeasure />
      <FilterTitle />
      <FilterIngredients />
    </>
  );
};

export default Filter;
