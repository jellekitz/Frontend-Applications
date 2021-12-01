import CocktailGlass from "../../images/cocktail.svg";
import useD3 from "../../hooks/useD3";
import { useContext } from "react";
import CocktailContext from "../../providers/CocktailContext";
import * as d3 from "d3";

const Svg = () => {
  const data = useContext(CocktailContext);

  const ref = useD3((container) => {
    const update = (newData) => {
      container
        .selectAll("g")
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

    const remove = (newData) => {
      d3.select(`#${newData[0]?.type}`)
        .transition()
        .style("height", "0px")
        .delay(0)
        .remove();
    };

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

  return (
    <>
      <img
        ref={ref}
        className="cocktail__glass"
        src={CocktailGlass}
        alt="Cocktail glass"
      />
      <div ref={ref} className="data-container"></div>
    </>
  );
};

export default Svg;
