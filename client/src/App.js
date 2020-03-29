import React from 'react';
import './App.css';
import Category from './components/Category'
import Cardshow from './components/Cardshow'

function App() {
  return (
    <div className="App">
      <div>Jeopardy</div>
      <Category />
      <Cardshow />
    </div>
  );
}

export default App;