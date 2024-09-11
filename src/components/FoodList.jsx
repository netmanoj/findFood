import React, { useEffect } from 'react';
import { useFoods } from '../context/FoodContext';
import { useCart } from '../context/CartContext';
import FoodItem from './FoodItem';

const FoodList = () => {
  const { foods, fetchFoods } = useFoods();
  const { addToCart } = useCart();

  // Ensure data is fetched only once
  useEffect(() => {
    if (foods.length === 0) {
      fetchFoods();
    }
  }, [fetchFoods, foods.length]);

  // Remove duplicates by filtering based on 'id'
  const uniqueFoods = Array.from(new Map(foods.map(item => [item.id, item])).values());

  return (
    <div className="food-list">
      <div className="food-items">
        {uniqueFoods.map((food) => (
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
