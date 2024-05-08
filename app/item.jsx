import React from "react";

const Items = ({ quantity, desc, packed, click, key, id, check }) => {
  return (
    <>
      <div key={key} className="space-x-2 text-xl font-medium">
        <input type="checkbox" onChange={() => check(id)} value={packed} />
        <span className={`${packed ? " line-through" : ""} space-x-1 `}>
          <span>{quantity}</span>
          <span>{desc}</span>
        </span>
        <button onClick={() => click(id)}>❌</button>
      </div>
    </>
  );
};

export default Items;
