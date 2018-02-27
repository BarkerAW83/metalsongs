import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="metalSongsLogo" />
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
          Suggest an evil word
        </p>
      </div>
    );
  }
}

export default App;
