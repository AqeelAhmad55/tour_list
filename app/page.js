"use client";
import { useState } from "react";
import Footer from "./components/footer";
import PackingList from "./components/packingList";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function Home() {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState(1);
  const [list, setList] = useState([]);

  const handleItemsList = (item) => {
    setList((items) => [...items, item]);
  };

  const handleClick = (id) => {
    setList((items) => items.filter((item) => item.id !== id));
  };

  const handleCheck = (id) => {
    setList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    const newItem = { select, input, packed: false, id: Math.random() };

    handleItemsList(newItem);

    setInput("");
    setSelect(1);
  };

  return (
    <main className="text-center h-full w-full">
      <div className="w-full bg-slate-600">
        <h1 className="text-5xl text-center uppercase p-12 font-bold text-white">
          🌴 tOUR KASHMIR 💼
        </h1>
      </div>
      <div className="mt-8">
        <form onSubmit={handleSubmit} className="flex justify-center gap-6">
          <h3 className="text-2xl font-medium ">
            What do you need for your 😍 trip?
          </h3>
          <select
            value={select}
            className="px-4 py-2 rounded-full bg-slate-200"
            onChange={(e) => setSelect(+e.target.value)}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="items..."
            className="px-6 py-2 rounded-full bg-slate-200"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="px-7 py-2 rounded-full bg-yellow-500">ADD</button>
        </form>
      </div>
      <PackingList
        list={list}
        handleClick={handleClick}
        handleCheck={handleCheck}
        setList={setList}
      />
      <Footer list={list} />
    </main>
  );
}
