import React from 'react';
import './App.css';
import Collection from './components/Collection';
import Collections from './components/Collections';

function App(): any {
  return (
    <div className="App">
      <h1>Flip Cards</h1>
      <Collections />
      <Collection />
    </div>
  );
}

export default App;
