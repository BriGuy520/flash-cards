import React from 'react';
import './App.css';
import Collection from './components/Collection';
import Collections from './components/Collections';


const initialValue: string = "Start New Collection...";


type Card = {
  id: number,
  question: string,
  answer: string, 
}

interface Collections {
  [currentCollection: string]: Array<Card>,
  
}

function App(): any {


  const [collections, setCollections] = React.useState<Collections>({});
  const [collectionName, setCollectionName] = React.useState<string>(initialValue);
  const [currentCollection, setCurrentCollection] = React.useState<string>('');

  const [question, setQuestion] = React.useState<string>('');
  const [answer, setAnswer] = React.useState<string>('');

  console.log(collections);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCard: Card = {
      id: Date.now(),
      question,
      answer,
    }

    const updateArray = [...collections[currentCollection]];

    updateArray.push(newCard);

    setCollections({...collections, [currentCollection]: updateArray})

    
  }

  const handleAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    setAnswer(e.target.value);
  }

  const handleQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setQuestion(e.target.value);
  }

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
        <Collection 
          selectedCollection={currentCollection} 
          handleSubmit={handleSubmit} 
          handleQuestion={handleQuestion}
          handleAnswer={handleAnswer}
          question={question}
          answer={answer}
          cards={collections[currentCollection]}
        />
      </div>
    </div>
  );
}

export default App;
