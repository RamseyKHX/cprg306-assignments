"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/week-10");
    } else {
      loadItems();
    }
  }, [user, router]);

  if (!user) return null;

  const handleAddItem = async (newItem) => {
    const itemId = await addItem(user.uid, newItem);
    setItems((prevItems) => [...prevItems, { ...newItem, id: itemId }]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(",")[0].replace(/[^\w\s]/gi, "").trim();
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
      <Link href="/week-10">
        Go to Shopping List
      </Link>
    </main>
  );
}
