import React, { useState } from "react";
import Items from "../item";

const PackingList = ({ list, setList, handleClick, handleCheck }) => {
  const [sortBy, setSortBy] = useState("inputOrder");

  let sortedItems;

  if (sortBy === "inputOrder") sortedItems = list;
  if (sortBy === "input")
    sortedItems = list.slice().sort((a, b) => {
      const descA = a.description || "";
      const descB = b.description || "";

      descA.localeCompare(descB);
    });

  if (sortBy === "packed")
    sortedItems = list.slice().sort((a, b) => +a.packed - +b.packed);

  const handleButton = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setList([]);
  };

  return (
    <div className="p-8 flex flex-col justify-between h-[60vh]">
      <ul className="grid grid-cols-4 gap-5">
        {sortedItems.map((item) => (
          <Items
            key={item.id}
            quantity={item.select}
            desc={item.input}
            packed={item.packed}
            click={handleClick}
            id={item.id}
            check={handleCheck}
          />
        ))}
      </ul>
      <div className=" flex gap-4 justify-center">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-lg font-medium bg-orange-200 text-center px-5 py-2 rounded-2xl"
        >
          <option value="inputOrder"> Sort by input order </option>
          <option value="input"> Sort by description order </option>
          <option value="packed"> Sort by packed status order </option>
        </select>
        <button
          className="text-lg font-medium bg-orange-200 text-center px-5 py-2 rounded-2xl"
          onClick={handleButton}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default PackingList;
