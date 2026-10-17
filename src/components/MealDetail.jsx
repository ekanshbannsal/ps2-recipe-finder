
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data);
      });
  }, [id]);

  if (!meal) {
    return <p>Loading...</p>;
  }

  return (
<div className="meal-detail">
<img
     src={meal.image}
     alt={meal.name}
     className="meal-image"
   />

  <div className="meal-content">
    <span className="meal-species">
      {meal.species}
    </span>

    <h2 className="meal-name">
      {meal.name}
    </h2>

    <p>
      Gender: <strong>{meal.gender}</strong>
    </p>

    <p>Location: {meal.location.name}</p>

    <div className="meal-details">
      <span>{meal.episode.length} episodes</span>
    </div>
  </div>
</div>
  );
}

export default MealDetail;