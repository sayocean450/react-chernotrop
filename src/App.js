import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import Article from './components/Article';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  
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
      let data = this.state.article;
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route path="/article">
              <Article data={data} />
            </Route>
          </Switch>
        </Router>
        );
      }
    }

export default App;
