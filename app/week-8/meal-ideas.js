'use client';

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

 
    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    }


    useEffect(() => {
        async function loadMealIdeas() {
            const mealsData = await fetchMealIdeas(ingredient);
            setMeals(mealsData);
        }

        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>
                        <p>{meal.strMeal}</p>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
