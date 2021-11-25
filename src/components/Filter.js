import FilterTitle from "./filter/Filter-title";
import FilterMeasure from "./filter/Filter-measure";
import FilterIngredients from "./filter/Filter-ingredients";
import { cocktailData } from "../providers/CocktailContext";

const Filter = () => {
  return (
    <>
      <FilterMeasure data={cocktailData} />
      <FilterTitle />
      <FilterIngredients />
    </>
  );
};

export default Filter;
