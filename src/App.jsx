import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer component
import { FoodProvider } from './context/FoodContext';
import { CartProvider } from './context/CartContext';

const App = () => (
  <Router>
    <FoodProvider>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer /> {/* Include Footer component */}
      </CartProvider>
    </FoodProvider>
  </Router>
);

export default App;
