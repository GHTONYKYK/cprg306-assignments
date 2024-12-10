"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUserAuth } from "../_utils/auth-context"; // Corrected import path
import { getItems, addItem } from "../week-10/firestore"; // Ensure the correct import path
import ItemList from "./item-list"; // Ensure this file exists in the same directory
import NewItem from "./new-item"; // Ensure this file exists in the same directory
import itemsData from "./items.json"; // Ensure this file exists in the same directory

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
};

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    if (user) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/"); // Redirect to landing page if not authenticated
    } else {
      loadItems();
    }
  }, [user, router]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const newItemId = await addItem(user.uid, newItem);
      const newItemWithId = { ...newItem, id: newItemId };
      setItems((prevItems) => [...prevItems, newItemWithId]);
    }
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

  if (!user) {
    return <p>Loading...</p>; // Optionally, you can show a loading message while redirecting
  }

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
