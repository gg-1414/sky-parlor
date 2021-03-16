import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import Main from './components/Main';
import './App.scss';

const apiUrl = 'https://boiling-gorge-97500.herokuapp.com';
class App extends Component {
  constructor() {
    super();

    this.state = {
      playlistEmbedCode: '',
      showLandingPage: true,
    }
  }

  fetchPlaylist = async () => {
    const res = await fetch(apiUrl + '/playlist/recent');
    const playlist = await res.json();
    this.setState({ playlistEmbedCode: playlist.embedCode });
    console.log('playlist',playlist)
  };

  renderPage = () => {
    if (this.state.showLandingPage) {
      return (
        <LandingPage handleLandingPageClick={this.handleLandingPageClick} />
      );
    } else {
      return (
        <Main />
      )
    }
  }

  handleLandingPageClick = () => {
    this.setState({ showLandingPage: false });
  }

  componentWillMount() {
    this.fetchPlaylist();
    console.log('this.playlistEmbedCode',this.state.playlistEmbedCode)
  }

  render() {
    const { playlistEmbedCode, showLandingPage } = this.state;

    return (
      <div className="App">

        { this.renderPage() }

        <div className="playlist" dangerouslySetInnerHTML={{ __html: playlistEmbedCode }} />
    
    </div>
    );
  }
}

export default App;
