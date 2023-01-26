import React from 'react';
import './App.css';
import Collection from './components/Collection';
import Collections from './components/Collections';


const initialValue: string = "Start New Collection...";

function App(): any {


  const [collections, setCollections] = React.useState<object>({});
  const [collectionName, setCollectionName] = React.useState<string>(initialValue);
  const [currentCollection, setCurrentCollection] = React.useState<string>('');

  const createCollection = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setCollectionName(e.target.value);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Update state when enter key is pressed

      setCollections({...collections, [collectionName]: []});
      setCollectionName(initialValue);
    }
  }

  const handleClick = (value: string) => {


    setCurrentCollection(value);
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
          handleClick={handleClick}
        />
      </div>
      <div className="collection-view"> 
        <Collection selectedCollection={currentCollection} />
      </div>
    </div>
  );
}

export default App;
