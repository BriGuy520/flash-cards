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

  const [editCard, setEditCard] = React.useState<number|null>(null);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCard: Card = {
      id: Date.now(),
      question,
      answer,
    }

    const updateArray = [...collections[currentCollection]];

    updateArray.push(newCard);

    setCollections({...collections, [currentCollection]: updateArray}); 
  }

  const handleAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    setAnswer(e.target.value);
  }

  const handleQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setQuestion(e.target.value);
  }

  const handleDeleteCard = (id: number) => {
  
    const removeCard = collections[currentCollection].filter((collection: Card) => collection.id !== id);

    setCollections({ ...collections, [currentCollection]: removeCard });
  }


  const handleEditClick = (id: number) => {

    const valueToChange = collections[currentCollection].findIndex(card => card.id == id);

    setEditCard(id);
    console.log(valueToChange);
  }

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
  }

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("Answer Change");
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
    <div className="App container-fluid">
      <h1>Flash Cards</h1>
      <div className="row">
        <div className="collections-row border height-100 col-lg-2 p-2">
          <Collections 
            createCollection={createCollection} 
            collectionName={collectionName} 
            handleAddCollection={handleKeyDown} 
            collections={collections}
            handleClick={handleClick}
          />
        </div>
        <div className="collection-view row col-lg-10"> 
          <Collection 
            selectedCollection={currentCollection} 
            handleSubmit={handleSubmit} 
            handleQuestion={handleQuestion}
            handleAnswer={handleAnswer}
            handleQuestionChange={handleQuestionChange}
            handleAnswerChange={handleAnswerChange}
            handleDeleteClick={handleDeleteCard}
            handleEditClick={handleEditClick}
            editCard={editCard}
            question={question}
            answer={answer}
            cards={collections[currentCollection]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
