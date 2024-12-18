"use client";
import React from 'react';

export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 text-white p-2 mb-4 rounded-lg shadow-md border border-gray-700 w-1/4 mx-0">
      <div className="font-bold text-lg">{name}</div>
      <div className="text-sm text-gray-300">Quantity: {quantity}</div>
      <div className="text-sm text-gray-300">Category: {category}</div>
    </li>
  );
}
