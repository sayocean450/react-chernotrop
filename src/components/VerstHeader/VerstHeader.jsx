import React from 'react';
import './VerstHeader.scss';

function VerstHeader(props) {
  return (
    <div className="VerstHeader">
      <div className='VerstHeader__Colontitle'>
        верста {props.num}
      </div>
      <div className='VerstHeader__Headline'>
        <h2>{props.headline}</h2>
      </div>
    </div>
  );
}

export default VerstHeader;
