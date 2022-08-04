import React from 'react';
import './header.css';
import Logo from '../../assets/Button.png';

const Header = () => {
  return (
    <div>
      <div className="container__header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="text_logo">
          <h1>Serba Serbi</h1>
        </div>
        <div className="text_home">
          <h3>Home</h3>
        </div>
        <div className="text_article">
          <h3>Article</h3>
        </div>
      </div>
      <div className="second__header">
        <div className="main__text">
          <h1>Article</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
