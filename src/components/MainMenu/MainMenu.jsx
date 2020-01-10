import React from 'react';
import './MainMenu.scss';
import {Link} from 'react-router-dom';

function MainMenu(props) {
  return (
    <nav className="MainMenu">
      <Link to='/manifest' className="MainMenu__Item">манифест</Link>
      <a href="http://ttttt.me/blacktrope" className="MainMenu__Item">telegram-канал</a>
      <Link to='/contacts' className="MainMenu__Item">контакты</Link>
    </nav>
  );
}

export default MainMenu;
