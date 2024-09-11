import React from 'react';

const FoodItem = ({ name, image, onAddToCart }) => (
  <div className="food-item">
    <img src={image} alt={name} className="food-image" />
    <h3>{name}</h3>
    <button onClick={onAddToCart}>Add to Cart</button>
  </div>
);

export default FoodItem;
