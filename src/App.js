import React from 'react';
import logo from './logo.svg';
import './App.css';
import Park from './attractions'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Park />
      </header>
    </div>
  );
}

export default App;
