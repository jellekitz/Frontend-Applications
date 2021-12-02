import CocktailGlass from "../../images/cocktail.svg";
import useD3 from "../../hooks/useD3";
import { useContext } from "react";
import CocktailContext from "../../providers/CocktailContext";
import * as d3 from "d3";

const Svg = () => {
  // Gebruik maken van de cocktailContext (zie providers/cocktailContext)
  const data = useContext(CocktailContext);

  // Gebruik maken van de useD3 function (staat beschreven in hooks/useD3)
  const ref = useD3((container) => {
    // Aanmaken van data
    const update = (newData) => {
      container
        .selectAll()
        .data(newData)
        .join((enter) => {
          const rect_enter = enter.append("rect");
          rect_enter.append("p").text((d) => d?.value + " cl");
          return rect_enter;
        })
        .attr("id", (d) => d?.type)
        .transition()
        .style("background", (d) => d?.color)
        .style("height", (d) => d?.value * 16 + "px");
    };

    // Verwijderen van data
    const remove = (newData) => {
      d3.select(`#${newData[0]?.type}`)
        .transition()
        .style("height", "0px")
        .delay(0)
        .remove();
    };

    // Filteren van ingredienten
    d3.selectAll(".filter__ingredient-input").on("change", function () {
      const checked = d3.select(this).property("checked");
      const name = d3.select(this).property("name");
      const filteredData = data.filter((d) => d?.type === name);

      if (checked === true) {
        update(filteredData);
      } else {
        remove(filteredData);
      }
    });
  });

  // Return de image en container
  return (
    <>
      <img
        className="cocktail__glass"
        src={CocktailGlass}
        alt="Cocktail glass"
      />
      <div ref={ref} className="data-container"></div>
    </>
  );
};

export default Svg;
