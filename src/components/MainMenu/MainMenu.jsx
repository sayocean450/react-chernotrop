import React from 'react';
import './MainMenu.scss';
import {Link} from 'react-router-dom';
function MainMenu(props) {
  return (
    <nav className="MainMenu">
      <Link to='/manifest' className={`MainMenu__Item ${props.active === 'manifest' ? 'MainMenu__Item_active' : ''}`}>манифест</Link>
      <a href="http://ttttt.me/blacktrope" className="MainMenu__Item">telegram-канал</a>
      <Link to='/contacts' className={`MainMenu__Item ${props.active === 'contacts' ? 'MainMenu__Item_active' : ''}`}>контакты</Link>
    </nav>
  );
}

export default MainMenu;
