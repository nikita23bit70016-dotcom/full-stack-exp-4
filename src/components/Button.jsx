import React from 'react';
import '../Components.css';

function Button({ label, onClick, variant = 'primary', type = 'submit' }) {
  return (
    <button 
      type={type}
      className={`premium-btn ${variant === 'secondary' ? 'secondary-btn' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
