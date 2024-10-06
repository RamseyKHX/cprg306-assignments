'use client'; 
import React from 'react';
import NewItem from './new-item'; 

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center  bg-black-500">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <NewItem />
    </div>
  );
}
