import './App.css';

import React, { Component } from 'react';

import HttpCat from 'components/HttpCat';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>http cats</h2>
        </div>
        <HttpCat status="200" />
      </div>
    );
  }
}

export default App;
