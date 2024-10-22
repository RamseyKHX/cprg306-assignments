"use client";
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json'; 

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name'); 

  
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-green-500' : 'bg-gray-500'}`}>Name</button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-blue-500' : 'bg-gray-500'}`}>Category</button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
