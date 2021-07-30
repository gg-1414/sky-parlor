import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Landing from './containers/Landing';
import Home from './containers/Home';
import Product from './containers/Product.js';
import './App.scss';

// const apiUrl = 'https://sky-parlor-admin.herokuapp.com';

class App extends Component {
  constructor() {
    super();

    this.state = {
      playlistEmbedCode: '',
    }
  }

  // fetchPlaylist = async () => {
  //   const res = await fetch(apiUrl + '/playlist/recent');
  //   const playlist = await res.json();
  //   this.setState({ playlistEmbedCode: playlist.embedCode });
  //   console.log('playlist',playlist)
  // };

  handleLandingClick = () => {
    this.setState({ showLanding: false, showMainPage: true });
  }

  componentWillMount() {
    // this.fetchPlaylist();
    // console.log('this.playlistEmbedCode',this.state.playlistEmbedCode)
  }

  render() {
    // const { playlistEmbedCode, showLanding, showMainPage } = this.state;

    return (
      <div className="App">
        {/* <div className="playlist" dangerouslySetInnerHTML={{ __html: playlistEmbedCode }} /> */}

        <Router>
          <Switch>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exact path="/home">
              <Home />
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