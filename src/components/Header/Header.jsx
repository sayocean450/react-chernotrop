import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <header className="Header">
      <div className="Header__Logo">
        <Link to="/" className="Header__Logo-Item">чернотроп</Link>
      </div>
      <div className="Header__Menu" id="modeValue">
        {}
      </div>
    </header>
  );
}

export default Header;
