"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([
    { text: "iphone", isStrikedThrough: false },
    { text: "samsung", isStrikedThrough: false },
    { text: "oppo", isStrikedThrough: false },
    { text: "apple", isStrikedThrough: false },
    { text: "banana", isStrikedThrough: false },
    { text: "strawberry", isStrikedThrough: false },
  ]);
  const strike = "text-decoration: line-through ";
  const [newItem, setNewItem] = useState("");
  const handleNewItem = () => {
    if (newItem) {
      setItems([...items, { text: newItem, isStrikedThrough: false }]);
      setNewItem("");
    }
  };

  const handleStrike = (index:number) => {
    const updatedItems = [...items]
    updatedItems[index].isStrikedThrough = !updatedItems[index].isStrikedThrough
    setItems(updatedItems)
  }

  const handleDelete = () => {
    setItems([])
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col">
        {items.map((item,index) => {
          return (
            <span onClick={()=>handleStrike(index)} className={`${item.isStrikedThrough ? strike : ""} cursor-pointer`} key={index}>
              {item.text}
            </span>
          );
        })}
      </div>

      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className="ml-20 text-sky-400"
      ></input>
      <button className="text-sky-400" onClick={handleNewItem}>
        Add new item
      </button>
      <button onClick={handleDelete}>Delete all</button>
    </div>
  );
}
