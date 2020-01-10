import React, {Component} from 'react';
import './Manifest.scss';
import MainMenu from '../MainMenu/MainMenu';
import Main from '../Main/Main';
import MainManifestText from '../MainManifestText/MainManifestText';
import {Helmet} from 'react-helmet';

class Manifest extends Component {
  render() {
    return (
      <div className="Manifest">
        <Helmet>
          <title>Манифест ⚒ Чернотроп</title>
          <meta name="description" content="Helmet application" />
          <meta property="og:title" content="Манифест ⚒ Чернотроп"/>
          <meta property="og:description" content="Литература нашего поколения будет реалистической, потому что…"/>
          <meta property="og:image" content="http://chernotrop.reviews/img/default.jpg"/>
        </Helmet>
        <Main left={<MainManifestText/>}
              right={<MainMenu active="manifest"/>}/>
      </div>
    );
  }
}

export default Manifest;
