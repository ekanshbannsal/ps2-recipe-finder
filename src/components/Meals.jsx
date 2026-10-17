import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MealCard from "./MealCard";

function Meals() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getMeals() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(search)}`
        );

        if (!response.ok) {
          throw new Error("Could not load recipes");
        }

        const data = await response.json();
        setMeals(data.meals || []);
      } catch (err) {
        setError("Something went wrong. Please try again.");
      }

      setLoading(false);
    }

    getMeals();
  }, [search]);

  function handleSearch(e) {
    e.preventDefault();
    setSearchParams(search ? { search } : {});
    setSearch(search.trim());
  }

  return (
    <div className="container">
      <h1>Explore Recipes</h1>
      <p>Find something delicious to cook today.</p>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search chicken, pasta, cake..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading recipes...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && meals.length === 0 && (
        <p>No recipe found. Try another dish.</p>
      )}

      <div className="meal-grid">
        {!loading && !error && meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default Meals;
