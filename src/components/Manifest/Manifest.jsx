import React, {Component} from 'react';
import './Manifest.scss';
import MainMenu from '../MainMenu/MainMenu';
import Main from '../Main/Main';
import MainManifestText from '../MainManifestText/MainManifestText';

class Manifest extends Component {
  render() {
    return (
      <div className="Manifest">
        <Main left={<MainManifestText/>}
              right={<MainMenu active="manifest"/>}/>
      </div>
    );
  }
}

export default Manifest;
