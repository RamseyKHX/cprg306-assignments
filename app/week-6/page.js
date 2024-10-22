"use client";
import React from 'react';
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#301934]">
      <h1 className="text-red-500 text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
