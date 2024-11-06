// app/week-6/item-list.js
"use client";

import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [itemList, setItemList] = useState(items);
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemList].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = itemList.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedGroupedItems = Object.keys(groupedItems)
    .sort()
    .reduce((acc, category) => {
      acc[category] = groupedItems[category].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return acc;
    }, {});

  return (
    <div className="container mx-auto">
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded ${
            sortBy === "group"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Group by Category
        </button>
      </div>
      {sortBy === "group" ? (
        <div>
          {Object.keys(sortedGroupedItems).map((category) => (
            <div key={category}>
              <h2 className="capitalize font-bold">{category}</h2>
              <ul className="list-none">
                {sortedGroupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="list-none">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
