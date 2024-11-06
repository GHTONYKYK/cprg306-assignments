import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="p-2 m-4 max-w-sm bg-slate-900 cursor-pointer hover:bg-slate-700"
      onClick={() => onSelect(name)}
    >
      <div className="font-bold text-lg">{name}</div>
      <div className="text-gray-400">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
