import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginModal from './LoginModal'

class App extends Component {
  render() {
    const user = window.localStorage.getItem('user');

    return (
      <div className="App">
        <LoginModal/>
      </div>
    );
  }
}

export default App;
