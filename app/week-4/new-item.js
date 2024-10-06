'use client'; 
import React, { useState } from 'react';

export default function NewItem() {  
  const [quantity, setQuantity] = useState(1);


  const increment = () => setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));

  
  const decrement = () => setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));

  return(
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center p-4">
        <p className="text-xl font-bold mb-4"> {quantity}</p>
        
        <div className="flex space-x-4">
          
          <button 
            onClick={increment} 
            className={`bg-blue-500 text-white w-10 rounded  ${quantity === 20 ? 'bg-gray-500' : ''}`}
            disabled={quantity === 20}>+</button>
          
        
          <button 
            onClick={decrement} 
            className={`bg-blue-500 text-white w-10 rounded ${quantity === 1 ? 'bg-gray-500' : ''}`}
            disabled={quantity === 1}>-</button>
        </div>
      </div>
    </div>
  );
}
