import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/colors.css';

class Colors extends Component {
  render() {
    return (
      <div className="colors">
        <h2>React</h2>
        <img className="logo" src={logo} alt="React logo" />
      </div>
    )
  }
}

export default Colors;
