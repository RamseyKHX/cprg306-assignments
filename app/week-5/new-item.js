'use client';
import React, { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState("");        
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState("produce"); 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const item = {
      name,
      quantity,
      category,};

    console.log(item);  
    alert(`Item added: \nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

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
        className="border px-11 p-2 rounded text-black " />

      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
            className={`bg-blue-500 text-black w-10 rounded ${quantity === 1 ? 'bg-gray-500' : ''}`}
            disabled={quantity === 1}> - </button>

          <p className="text-xl font-bold">{quantity}</p>
          <button
            type="button"
            onClick={() => setQuantity((prev) => (prev < 20 ? prev + 1 : prev))}
            className={`bg-blue-500 text-black w-10 rounded ${quantity === 20 ? 'bg-gray-500' : ''}`}
            disabled={quantity === 20}>+</button>
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="border p-2 rounded text-black">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button type="submit" className="bg-green-800 text-white py-2 px-12 rounded">Add</button>
    </form>
  );
}