import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="home">
        <span>Home</span>
      </div>
      <button type="button" className="login">
        <label htmlFor="login">login </label>
      </button>
    </div>
  );
}

export { Header };
