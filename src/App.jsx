import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer component
import { FoodProvider } from './context/FoodContext';
import { CartProvider } from './context/CartContext';
import Login from './components/Login'; // Import Login component
import About from './pages/About'; // Import About page

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Retrieve login state from localStorage
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    // Update localStorage when isLoggedIn state changes
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <FoodProvider>
        <CartProvider>
          <Header />
          <Routes>
            {!isLoggedIn ? (
              <Route path="/login" element={<Login setIsLoggedIn={handleLogin} />} />
            ) : (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
            <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
          </Routes>
          <Footer /> {/* Include Footer component */}
        </CartProvider>
      </FoodProvider>
    </Router>
  );
};

export default App;
