import React from 'react';


const Notification = ({ message, isVisible }) => (
  isVisible ? (
    <div className="notification">
      {message}
    </div>
  ) : null
);

export default Notification;
