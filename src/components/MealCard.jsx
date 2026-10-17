// import { Link } from "react-router-dom";

// export default function MealCard({ meal }) {
//   return (
//     <Link to={`/meal/${meal.idMeal}`} className="card">
//       <img src={meal.strMealThumb} alt={meal.strMeal} />
//       <h3>{meal.strMeal}</h3>
//       <p>{meal.strCategory}</p>
//       <p>{meal.strArea}</p>
//     </Link>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

export default function MealCard({ meal }) {
  if (!meal) {
return <p>Meal data is loading...</p>;
}
  return (
    
    
    <Link to={`/meals/${meal.id}`} className="card">
      
      <img src={meal.image} alt={meal.name} />
      <h3>{meal.name}</h3>
      <p>{meal.species}</p>
      <StatusBadge status={meal.status} />
    </Link>
  );
}