import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Notification from './Notification'; // Import the Notification component

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [address, setAddress] = useState('');
  const [notificationVisible, setNotificationVisible] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setNotificationVisible(true);
      setTimeout(() => setNotificationVisible(false), 3000); // Hide notification after 3 seconds
    }
  }, [cart]);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear the cart
    clearCart();
    // Hide the checkout form
    setShowCheckout(false);
  };

  return (
    <div className="cart-page">
      <Notification 
        message="Item added to cart" 
        isVisible={notificationVisible} 
      />
      <h2>Your Cart</h2>
      <ul>
        {cart.length > 0 ? (
          cart.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <span>{item.name}</span>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>

      {cart.length > 0 && !showCheckout && (
        <div className="button-container">
        <button onClick={handleCheckout} className="checkout-button">Checkout</button>
        </div>
      )}

      {showCheckout && (
        <div className="checkout-form">
          <h3>Enter Address for Delivery</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={handleAddressChange}
              required
            />
            <button type="submit">Submit Address</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartPage;

