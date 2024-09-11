import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
