import { useContext } from "react";
import { Link } from "react-router-dom";

// Titel van de cocktail

const Nav = () => {
  return (
    <nav className="filter__nav">
      <Link className="filter__nav-a" to="/">
        Welkom
      </Link>
      <Link className="filter__nav-a" to="/cocktails">
        Cocktails
      </Link>
    </nav>
  );
};

export default Nav;
