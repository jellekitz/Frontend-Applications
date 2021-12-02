import "./styles/app.scss";
import { ApiProvider } from "./providers/ApiContext";
import { CocktailProvider } from "./providers/CocktailContext";
import Welcome from "./components/pages/Welcome";
import Svg from "./components/pages/Svg";
import Filter from "./components/Filter";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <CocktailProvider>
      <div className="wrapper">
        <section className="cocktail">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/cocktails" element={<Svg />} />
          </Routes>
        </section>
        <section className="filter">
          <Nav />
          <Routes>
            <Route
              path="/cocktails"
              element={
                <ApiProvider>
                  <Filter />
                </ApiProvider>
              }
            />
          </Routes>
        </section>
      </div>
    </CocktailProvider>
  );
};

export default App;
