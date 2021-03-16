import React, { Component } from 'react';

class LandingPage extends Component {

  render() {
    const { handleLandingPageClick } = this.props; 

    return (
      <div className="LandingPage" onClick={handleLandingPageClick}>
        I am the landing page. Click me.
      </div>
    );
  }
}

export default LandingPage;
