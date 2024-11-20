'use client';
import React, { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    }

    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas(ingredient).then(setMeals);
        }
    }, [ingredient]);

    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold text-white mb-4">Meal Ideas for {ingredient}</h2>
            <ul className="space-y-4">
                {meals.map(meal => (
                    <li key={meal.idMeal} className="bg-gray-800 text-white p-4 rounded-md shadow-md">
                        <p>{meal.strMeal}</p>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="mt-2 w-full h-32 object-cover rounded-md" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
