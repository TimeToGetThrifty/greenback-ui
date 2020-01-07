import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginModal from './LoginModal'
import AppCore from './AppCore'

class App extends Component {
  render() {
    const token = window.localStorage.getItem("greenback-jwt-token");

    return (
      <div className="App">
        {token == null ? <LoginModal/> : <AppCore/>}
      </div>
    );
  }
}

export default App;
