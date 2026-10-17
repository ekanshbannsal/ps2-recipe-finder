import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <p className="tag">FIND YOUR NEXT FAVOURITE MEAL</p>

      <h1>Good food, <span>good mood.</span></h1>

      <p>
        Discover delicious recipes from around the world.
        Find your favourite dish and start cooking.
      </p>

      <Link to="/meals" className="button">
        Explore Recipes
      </Link>

      <h2>What are you craving?</h2>

      <div className="quick-links">
        <Link to="/meals?search=chicken">Chicken</Link>
        <Link to="/meals?search=pasta">Pasta</Link>
        <Link to="/meals?search=cake">Cake</Link>
      </div>
    </div>
  );
}

export default Home;
