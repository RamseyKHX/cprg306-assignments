'use client';

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName.split(',')[0].replace(/[^\w\s]/gi, '').trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="flex bg-slate-950">
            <div className="w-1/2">
                <h1 className="text-3xl font-bold text-white-800 mb-8 pt-3 px-2">
                    Shopping List
                </h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div className="w-1/2">
                {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
            </div>
        </main>
    );
}
