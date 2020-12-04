import React from 'react';
import './App.css';
import Header from './Header';
import WinderCards from './WinderCards';
import SwipeButtons from './SwipeButtons';


function App() {
  return (
    <div className="app">
      <Header />

      <WinderCards />
      
      <SwipeButtons />
    </div>
  );
}

export default App;
