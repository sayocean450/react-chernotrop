import React, {Component} from 'react';
import './Contacts.scss';
import MainMenu from '../MainMenu/MainMenu';
import Main from '../Main/Main';
import MainContactsText from '../MainContactsText/MainContactsText';

class Contacts extends Component {
  render() {
    return (
      <div className="Manifest">
        <Main left={<MainContactsText/>}
              right={<MainMenu active="contacts"/>}/>
      </div>
    );
  }
}

export default Contacts;
