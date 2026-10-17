import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>Recipe Finder</h1>
      <p>Search a dish and open its full recipe.</p>
      <div className="nav-links" style={{ justifyContent: "center" }}>
        <Link to="/meals?s=Chicken" className="btn">Chicken</Link>
        <Link to="/meals?s=Pasta" className="btn">Pasta</Link>
        <Link to="/meals?s=Cake" className="btn">Cake</Link>
      </div>
    </section>
  );
}
