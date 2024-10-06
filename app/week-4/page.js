'use client'; 
import React from 'react';
import NewItem from './new-item'; 

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center bg-black-100">
      <div className="bg-red-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center"></h1>
        <NewItem />
      </div>
    </div>
  );
}
