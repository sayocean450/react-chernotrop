import React, {Component} from 'react';
import './Index.scss';
import Main from '../Main/Main';
import MainIndexText from '../MainIndexText/MainIndexText';
import MainMenu from '../MainMenu/MainMenu';
import VerstList from '../VerstList/VerstList';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Main
          left={<MainIndexText/>}
          right={<MainMenu />}
        />
        <VerstList />
      </div>
    );
  }
}

export default Index;
