import React from 'react';
import './Header.sass'

const Header = ({right}) => {
  return (
    <header className="Header">
      <a href="/" className="title">
        짹짹이
      </a>
      <div className="right">{right}</div>
    </header>
  );
};


export default Header;