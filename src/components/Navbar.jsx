import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Recipe Finder</Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="/meals">Recipes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
