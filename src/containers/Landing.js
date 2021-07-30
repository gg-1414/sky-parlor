import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

  render() {
    return (
      <div className="Landing">
        <Link to="/home">
          I am the landing page. Click me.
        </Link>
      </div>
    );
  }
}

export default Landing;