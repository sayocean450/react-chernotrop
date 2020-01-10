import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';

import Header from '../Header/Header';
import Main from '../Main/Main';
import MainIndexText from '../MainIndexText/MainIndexText';
import MainMenu from '../MainMenu/MainMenu';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        article: [],
      };
    }
    
  componentDidMount() {
      fetch('https://api.airtable.com/v0/appiP1kLZSXAZ3GZ3/Table%201?api_key=keygGeA7NPJaItczV')
      .then((resp) => resp.json())
      .then(data => {
         this.setState({ article: data.records });
      }).catch(err => {
        // Error :(
      });
    }
    
    render() {
      return (
        <div className="App">
          <Router>
            <Header />
            <Main left={<MainIndexText/>} right={<MainMenu />}/>
            <Switch>
              <Route exact path="/">
              </Route>
              <Route path="/article">
              </Route>
            </Switch>
          </Router>
        </div>
        );
      }
    }

export default App;
