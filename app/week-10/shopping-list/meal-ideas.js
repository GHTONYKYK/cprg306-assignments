"use client";

import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getMealIdeas = async () => {
      if (ingredient) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
      }
    };

    getMealIdeas();
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      <ul className="list-none">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-2 text-sm">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
