import React, { useState } from 'react';
import { useFoods } from '../context/FoodContext';
import { useCart } from '../context/CartContext';
import FoodItem from './FoodItem';

const FoodSearch = () => {
  const { foods } = useFoods();
  const [searchTerm, setSearchTerm] = useState('');
  const filteredFoods = foods.filter(food => 
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const { addToCart } = useCart();

  return (
    <div className="food-search">
      <input 
        type="text" 
        placeholder="Search for food..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div className="food-items">
        {filteredFoods.map(food => (
          <FoodItem 
            key={food.id} 
            name={food.name} 
            image={food.image} 
            onAddToCart={() => addToCart(food)} 
          />
        ))}
      </div>
    </div>
  );
};

export default FoodSearch;
