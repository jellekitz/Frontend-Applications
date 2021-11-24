import "./styles/app.scss";
import { CocktailProvider } from "./providers/CocktailContext";
import Title from "./components/Title";
import Svg from "./components/Svg";
import Filter from "./components/Filter";

const App = () => {
  return (
    <CocktailProvider>
      <div className="wrapper">
        <section className="cocktail">
          <Svg />
        </section>
        <section className="filter">
          <Title />
          <Filter />
        </section>
      </div>
    </CocktailProvider>
  );
};

export default App;
