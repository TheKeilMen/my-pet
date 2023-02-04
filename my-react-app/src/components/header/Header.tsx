import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="Header">
      <div className="home">
        <span> Home </span>
      </div>
      <button type="button" id="login">
        <span> login </span>
      </button>
    </div>
  );
}

export { Header };
