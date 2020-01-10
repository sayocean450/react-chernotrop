import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';

import Header from '../Header/Header';
import Index from '../Index/Index';
import Manifest from '../Manifest/Manifest';
import Contacts from '../Contacts/Contacts';

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
            <Switch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/manifest">
                <Manifest />
              </Route>
              <Route path="/contacts">
                <Contacts />
              </Route>
            </Switch>
          </Router>
        </div>
        );
      }
    }

export default App;
