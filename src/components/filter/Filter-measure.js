const FilterMeasure = ({ data }) => {
  const getData = data[0];

  const result = getData.map((obj) => obj.value);

  const sum = result[0] + result[1] + result[2] + result[3] + result[4] + " cl";

  return <p className="filter__measure">Inhoud van Cocktail: {sum}</p>;
};

export default FilterMeasure;
