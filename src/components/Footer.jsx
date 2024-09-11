import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Food App. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
