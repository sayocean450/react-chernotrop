import React, {Component} from 'react';
import './Verst.scss';
import VerstHeader from '../VerstHeader/VerstHeader';

class Verst extends Component {
  render() {
    return (
      <div className="Verst">
        <VerstHeader />
        <div className='Verst__Content'>
          <div className='Verst__Col1'>{this.props.col1}</div>
          <div className='Verst__Col2'>{this.props.col2}</div>
          <div className='Verst__Col3'>{this.props.col3}</div>
        </div>
      </div>
    );
  }
}

export default Verst;
