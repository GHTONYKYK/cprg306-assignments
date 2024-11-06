// app/week-3/item.js
import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 m-4 max-w-sm bg-slate-900">
      <div className="font-bold text-lg">{name}</div>
      <div className="text-gray-400">
        Buy {quantity} in {category}
      </div>
    </li>
  );
};

export default Item;
