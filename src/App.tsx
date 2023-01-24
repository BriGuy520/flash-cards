import React from 'react';
import './App.css';
import Collection from './components/Collection';
import Collections from './components/Collections';
import CreateCard from './components/CreateCard';

function App(): any {
  return (
    <div className="App">
      <h1>Flip Cards</h1>
      <Collections />
      <Collection />
      <CreateCard />
    </div>
  );
}

export default App;
