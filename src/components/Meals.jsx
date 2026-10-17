import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MealCard from "./MealCard";

export default function Meals() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("s") || "");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, [search]);

  return (
    <div>
      <h1>Meals</h1>

      <input
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search a dish"
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && !meals && <p>No recipe found</p>}

      {!loading && !error && meals && (
        <div className="grid">
          {meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
            />
          ))}
        </div>
      )}
    </div>
  );
}
