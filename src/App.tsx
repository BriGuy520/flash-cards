import React from 'react';
import './App.css';
import Collection from './components/Collection';
import Collections from './components/Collections';

function App(): any {

  const [collectionName, setCollectionName] = React.useState<string>('Start a New Collection...');

  const createCollection = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setCollectionName(e.target.value)

  }

  return (
    <div className="App">
      <h1>Flash Cards</h1>
      <Collections createCollection={createCollection} collectionName={collectionName} />
      <Collection />
    </div>
  );
}

export default App;
