import React from 'react';
import logo from './logo.svg';
import './App.css';
import Category from './components/Category'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <div>This is where the game will be!!! Yay! </div>
      <Category />
      <Card />
    </div>
  );
}

export default App;
