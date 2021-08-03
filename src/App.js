import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Landing from './pages/Landing';
import Home from './pages/Home';
import Product from './pages/Product';
import Admin from './pages/Admin';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      playlistEmbedCode: '',
    }
  }

  handleLandingClick = () => {
    this.setState({ showLanding: false, showMainPage: true });
  }

  componentWillMount() {
    // this.fetchPlaylist();
    // console.log('this.playlistEmbedCode',this.state.playlistEmbedCode)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;