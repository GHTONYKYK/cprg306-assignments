"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMeals(data.meals || []);
        });
    }
  }, [ingredient]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      {meals.length > 0 ? (
        <ul className="list-none">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="mb-2">
              <div className="p-4 bg-slate-900 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{meal.strMeal}</h3>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-auto rounded-lg mt-2"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found for "{ingredient}".</p>
      )}
    </div>
  );
};

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="container mx-auto p-4 bg-slate-950">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <div className="flex">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
