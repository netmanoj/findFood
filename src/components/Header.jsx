import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the CartContext

const Header = () => {
  const { cart } = useCart(); // Get the cart from context

  return (
    <header>
      <h1>Food App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart {cart.length > 0 && `(${cart.length})`} {/* Display the cart count */}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
