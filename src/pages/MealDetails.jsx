import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getMeal() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (!response.ok) {
          throw new Error("Could not load recipe");
        }

        const data = await response.json();

        if (data.meals) {
          setMeal(data.meals[0]);
        } else {
          setError("Recipe not found");
        }
      } catch (err) {
        setError("Could not load recipe. Please try again.");
      }

      setLoading(false);
    }

    getMeal();
  }, [id]);

  if (loading) return <p className="message">Loading recipe...</p>;

  if (error || !meal) {
    return (
      <div className="message">
        <p>{error || "Recipe not found"}</p>
        <Link to="/meals">Back to recipes</Link>
      </div>
    );
  }

  return (
    <div className="container detail">
      <Link to="/meals" className="back-link">← Back to recipes</Link>

      <div className="detail-top">
        <img src={meal.strMealThumb} alt={meal.strMeal} />

        <div>
          <p className="tag">{meal.strArea} Cuisine</p>
          <h1>{meal.strMeal}</h1>
          <p>Category: {meal.strCategory}</p>

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Watch on YouTube
            </a>
          )}
        </div>
      </div>

      <h2>Ingredients</h2>

      <ul className="ingredients">
        {Array.from({ length: 20 }, (_, index) => {
          const number = index + 1;
          const ingredient = meal[`strIngredient${number}`];
          const measure = meal[`strMeasure${number}`];

          if (!ingredient || !ingredient.trim()) return null;

          return (
            <li key={number}>
              {measure} {ingredient}
            </li>
          );
        })}
      </ul>

      <h2>Instructions</h2>

      <p className="instructions">{meal.strInstructions}</p>
    </div>
  );
}

export default MealDetails;
