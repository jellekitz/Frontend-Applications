import "./styles/app.scss";
import Title from "./components/Title.js";
import Svg from "./components/Svg.js";
import Filter from "./components/Filter.js";

const App = () => {
  return (
    <div>
      <Title />
      <section className="wrapper">
        <Svg />
        <Filter />
      </section>
    </div>
  );
};

export default App;
