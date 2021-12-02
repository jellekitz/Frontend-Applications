import { createContext, useState, useEffect } from "react";
import * as d3 from "d3";

// Gebruik maken van de ApiContext (zie providers/ApiContext)
const ApiContext = createContext(null);

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Wanneer de componenten zijn gerenderd dan voeren we deze D3 fetch uit
  useEffect(() => {
    d3.json("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=pornstar")
      .then((data) => {
        const apiData = data.drinks[0];

        setData(apiData);
      })
      .catch((err) => console.log(err));
  }, []);

  // Return de provider
  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};

export default ApiContext;
