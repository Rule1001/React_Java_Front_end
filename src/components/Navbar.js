import React from 'react';
import { Link } from 'react-router-dom';
import NewProperty from './NewProperty'

class Navbar extends React.Component {
  render () {
    return (
        <nav>
          <h1>Java Properties</h1>
          <Link className="HomeLink" to="/">Home</Link>
          <Link className="newPropertyLink" to="/newProperty">Add Property</Link>
        </nav>
    );
  }
}

export default Navbar;