import React from 'react';
import { useFoods } from '../context/FoodContext';
import { useCart } from '../context/CartContext';
import FoodItem from './FoodItem';

const FoodList = () => {
  const { foods } = useFoods();
  const { addToCart } = useCart();

  return (
    <div className="food-list">
      <div className="food-items">
        {foods.map(food => (
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

export default FoodList;
