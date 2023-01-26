import React from 'react';
import './App.css';
import Collection from './components/Collection';
import Collections from './components/Collections';

function App(): any {

  const [collections, setCollections] = React.useState<object>({});
  const [collectionName, setCollectionName] = React.useState<string>('Start New Collection...');
  const [currentCollection, setCurrentCollection] = React.useState<object[]>([]);
  const createCollection = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setCollectionName(e.target.value);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Update state when enter key is pressed


      setCollections({...collections, [collectionName]: []});
    }
  }
  

  return (
    <div className="App">
      <h1>Flash Cards</h1>
      <div className="collections-row">
        <Collections 
          createCollection={createCollection} 
          collectionName={collectionName} 
          handleAddCollection={handleKeyDown} 
          collections={collections}
        />
      </div>
      <div className="collection-view"> 
        <Collection />
      </div>
    </div>
  );
}

export default App;
