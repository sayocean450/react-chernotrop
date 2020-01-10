import React, {Component} from 'react';
import './Manifest.scss';
import MainMenu from '../MainMenu/MainMenu';
import Main from '../Main/Main';

class Manifest extends Component {
  render() {
    return (
      <div className="Manifest">
        <Main left={<p>Левый</p>}
              right={<MainMenu active="manifest"/>}/>
      </div>
    );
  }
}

export default Manifest;
