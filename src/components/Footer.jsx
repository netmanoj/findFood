import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for internal navigation
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Food App. All rights reserved.</p>
        <nav className="footer-nav">
          <Link to="/">Home</Link> {/* Use Link for internal routing */}
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
