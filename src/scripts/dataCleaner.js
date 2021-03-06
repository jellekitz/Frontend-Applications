import { removeText, toNumber, addDash } from "sanitize.js";

const dataCleaner = (data) => {
  const ingredients = [];
  const measure = [];

  data.drinks.forEach((obj) => {
    const firstIngr = obj["strIngredient1"];
    const secondIngr = obj["strIngredient2"];
    const thirdIngr = obj["strIngredient3"];
    const fourthIngr = obj["strIngredient4"];
    const fifthIngr = obj["strIngredient5"];

    const firstMeasure = obj["strMeasure1"];
    const secondMeasure = obj["strMeasure2"];
    const thirdMeasure = obj["strMeasure3"];
    const fourthMeasure = obj["strMeasure4"];
    const fifthMeasure = obj["strMeasure5"];

    ingredients.push(firstIngr, secondIngr, thirdIngr, fourthIngr, fifthIngr);
    measure.push(
      firstMeasure,
      secondMeasure,
      thirdMeasure,
      fourthMeasure,
      fifthMeasure
    );
  });

  const stringNumber = removeText(measure);
  const measureNumber = toNumber(stringNumber);
  const dashedIngridient = addDash(ingredients);

  const newData = [
    {
      type: `${dashedIngridient[0]}`,
      value: measureNumber[0],
      color: "#581845",
    },
    {
      type: `${dashedIngridient[1]}`,
      value: measureNumber[1],
      color: "#C70039",
    },
    {
      type: `${dashedIngridient[2]}`,
      value: measureNumber[2],
      color: "#FFC300",
    },
    {
      type: `${dashedIngridient[3]}`,
      value: measureNumber[3],
      color: "#DAF7A6",
    },
    {
      type: `${dashedIngridient[4]}`,
      value: measureNumber[4],
      color: "#FF5733",
    },
  ];

  console.log(newData);
};

export { dataCleaner };
