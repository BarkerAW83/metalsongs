import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Search from './Search.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textInput: '',
      songArray: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  search (term){
    this.setState({
      songArray: this.state.songArray
    })
  }

  handleChange(event){
    this.setState({
      textInput: event.target.value
    })
  }
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
        <Search onSearch={this.search.bind(this)}/>
      </div>
    );
  }
}

export default App;
