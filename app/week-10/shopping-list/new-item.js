"use client";
import React, { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: Math.random().toString(36).substring(2, 15),
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-4 space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item Name"
        required
        className="border px-11 p-2 rounded text-black"
      />
      <div className="flex space-x-4">
        <button type="button" onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))} className={`bg-blue-500 w-10 rounded ${quantity === 1 ? 'bg-gray-500' : ''}`} disabled={quantity === 1}>-</button>
        <p className="text-xl font-bold">{quantity}</p>
        <button type="button" onClick={() => setQuantity((prev) => (prev < 20 ? prev + 1 : prev))} className={`bg-blue-500 w-10 rounded ${quantity === 20 ? 'bg-gray-500' : ''}`} disabled={quantity === 20}>+</button>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required className="border p-2 rounded text-black">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          
        </select>
      </div>
      <button type="submit" className="bg-green-800 text-white py-2 px-12 rounded">Add</button>
    </form>
  );
}
