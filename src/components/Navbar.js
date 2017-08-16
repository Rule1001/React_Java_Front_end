import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render () {
    return (
        <nav>
          <h1>Java Properties</h1>
          <Link className="topicLink" to="/">Home</Link>
        </nav>
    );
  }
}

export default Navbar;