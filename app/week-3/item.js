import React from 'react';

export default function Item({ name, quantity, category }) {
  return (
    <li>
      <p className="text-green-500 font-bold text-3x1"> {name}</p>
      <p className="text-2x1 text-white-500">Quantity: {quantity}</p>
      <p className="text-2x1 text-white-500">Category: {category}</p>
    </li>
  );
}



