import React from 'react';
import FoodItem from './FoodItem';
import images from '../assets/images';
import '../compo-css/FoodGallery.css'; // Import the CSS file

const foodItems = [
  { name: 'Mac & Cheese', image: images.macAndCheese },
  { name: 'Margherita Pizza', image: images.margheritaPizza },
  { name: 'Caesar Salad', image: images.caesarSalad },
  { name: 'Spaghetti Carbonara', image: images.spaghettiCarbonara },
  { name: 'Veggie Burger', image: images.veggieBurger },
  { name: 'Grilled Chicken Sandwich', image: images.grilledChickenSandwich },
  { name: 'Steak Frites', image: images.steakFrites },
  { name: 'Sushi Roll Platter', image: images.sushiRollPlatter },
  { name: 'Chicken Curry', image: images.chickenCurry },
  { name: 'Vegan Buddha Bowl', image: images.veganBuddhaBowl },
  { name: 'Seafood Paella', image: images.seafoodPaella },
  { name: 'Pancake Stack', image: images.pancakeStack },
  { name: 'Miso Ramen', image: images.misoRamen },
  { name: 'Beef Tacos', image: images.beefTacos },
  { name: 'Chocolate Brownie', image: images.chocolateBrownie },
  { name: 'Lobster Bisque', image: images.lobsterBisque },
  { name: 'Mushroom Risotto', image: images.mushroomRisotto },
  { name: 'Eggplant Parmesan', image: images.eggplantParmesan },
  { name: 'Lemon Cheesecake', image: images.lemonCheesecake },
  { name: 'Falafel Wrap', image: images.falafelWrap },
];

const FoodGallery = () => (
  <div className="food-gallery">
    <h1>Food Gallery</h1>
    {foodItems.map((item, index) => (
      <FoodItem 
        key={index} 
        name={item.name} 
        image={item.image} 
        onAddToCart={() => console.log(`${item.name} added to cart`)} 
      />
    ))}
  </div>
);

export default FoodGallery;
