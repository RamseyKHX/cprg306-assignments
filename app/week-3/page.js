import React from 'react';
import ItemList from './item-list';
import Link from "next/link";


export default function Page() {
  return (
    <main> 
      <div>
        <h1 className="text-purple-500 text-2xl font-bold mb-4">Shopping List</h1>
        <ItemList />
        
      </div>

    </main>
  );
};


