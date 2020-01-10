import React from 'react';
import './Main.scss';

function Main(props) {
  return (
    <div className='Main'>
      <div className='Main__Left'>
        {props.left}
      </div>
      <div className='Main__Right'>
        {props.right}
      </div>
    </div>
  );
}

export default Main;
