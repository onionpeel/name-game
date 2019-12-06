import React from 'react';
import Scoreboard from './components/Scoreboard';
import Header from './components/Header';
import Calculate from './components/Calculate';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Scoreboard />
      <Calculate />
    </div>
  );
}

export default App;
