import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import './Index.scss';

import Main from '../Main/Main';
import MainIndexText from '../MainIndexText/MainIndexText';
import MainMenu from '../MainMenu/MainMenu';
import VerstList from '../VerstList/VerstList';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Helmet>
          <title>Чернотроп ⚒ Русский реализм</title>
          <meta name="description" content="Helmet application" />
          <meta property="og:title" content="Чернотроп ⚒ Русский реализм"/>
          <meta property="og:description" content="Скрещиваем русскую реалистическую прозу с современностью"/>
          <meta property="og:image" content="http://chernotrop.reviews/img/default.jpg"/>
        </Helmet>
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
