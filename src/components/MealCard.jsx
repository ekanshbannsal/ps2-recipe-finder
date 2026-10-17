import { Link } from "react-router-dom";

function MealCard({ meal }) {
  return (
    <Link to={`/meal/${meal.idMeal}`} className="card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <div className="card-info">
        <p>{meal.strArea || "Recipe"}</p>
        <h3>{meal.strMeal}</h3>
        <span>View recipe →</span>
      </div>
    </Link>
  );
}

export default MealCard;