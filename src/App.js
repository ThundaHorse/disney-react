import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import Park from './components/Parks';

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
