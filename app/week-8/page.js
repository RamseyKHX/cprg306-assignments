"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName.split(',')[0].replace(/[^\w\s]/gi, '').trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="min-h-screen bg-[#301934] p-4">
            <h1 className="text-red-500 text-3xl font-bold mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <div className="flex">
                <div className="w-1/2">
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2">
                    {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                </div>
            </div>
        </main>
    );
}
