import React, {Component} from 'react';
import './Contacts.scss';
import MainMenu from '../MainMenu/MainMenu';
import Main from '../Main/Main';
import MainContactsText from '../MainContactsText/MainContactsText';
import {Helmet} from 'react-helmet';

class Contacts extends Component {
  render() {
    return (
      <div className="Manifest">
        <Helmet>
          <title>Контакты ⚒ Чернотроп</title>
          <meta name="description" content="Helmet application" />
          <meta property="og:title" content="Контакты ⚒ Чернотроп"/>
          <meta property="og:description" content="Как с нами связаться"/>
          <meta property="og:image" content="http://chernotrop.reviews/img/default.jpg"/>
        </Helmet>
        <Main left={<MainContactsText/>}
              right={<MainMenu active="contacts"/>}/>
      </div>
    );
  }
}

export default Contacts;
