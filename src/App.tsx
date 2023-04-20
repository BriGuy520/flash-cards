import React from 'react';
import './App.css';
import Collection from './components/Collection';
import Collections from './components/Collections';
import { data } from './db/data';

const initialValue: string = "Start New Collection...";

export type CardDetails = {
  id: number,
  question: string,
  answer: string, 
}

export interface CollectionsInterface {
  [currentCollection: string]: Array<CardDetails>,  
}

function App(): any {

  const [collections, setCollections] = React.useState<CollectionsInterface>(data);
  const [collectionName, setCollectionName] = React.useState<string>(initialValue);
  const [currentCollection, setCurrentCollection] = React.useState<string>('');

  const [question, setQuestion] = React.useState<string>('');
  const [answer, setAnswer] = React.useState<string>('');

  const [editCard, setEditCard] = React.useState<Array<number>>([]);
  const [editQuestion, setEditQuestion] = React.useState<string>('');
  const [editAnswer, setEditAnswer] = React.useState<string>('');

  const [practice, setPractice] = React.useState<boolean>(false);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCard: CardDetails = {
      id: Date.now(),
      question,
      answer,
    }

    const updateArray = [...collections[currentCollection]];

    updateArray.push(newCard);

    setCollections({...collections, [currentCollection]: updateArray}); 
    setQuestion('');
    setAnswer('');
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
  
    const removeCard = collections[currentCollection].filter((collection: CardDetails) => collection.id !== id);

    setCollections({ ...collections, [currentCollection]: removeCard });
  }


  const handleEditClick = (id: number) => {

    const valueToChange = collections[currentCollection].findIndex(card => card.id === id);

    setEditCard([id, valueToChange]);
    setEditQuestion(collections[currentCollection][valueToChange].question);
    setEditAnswer(collections[currentCollection][valueToChange].answer);

  }

  const handleEditSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateCard = collections[currentCollection].map((card, idx) => {
      
        if(editCard[1] === idx){
          card.question = editQuestion;
          card.answer = editAnswer;
        }

        return card;
    });
    

    setCollections({...collections, [currentCollection]: updateCard });
    setEditCard([])
  }

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setEditQuestion(e.target.value);
  }

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    setEditAnswer(e.target.value);
  }

  const createCollection = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setCollectionName(e.target.value);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Update state when enter key is pressed

      setCollections({...collections, [collectionName]: []});
      setCurrentCollection(collectionName);
      setCollectionName(initialValue);
    }
  }

  const practiceMode = (): void => {

    setPractice(!practice);
  }

  const handleClick = (value: string) => {

    setPractice(false);
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
            currentCollection={currentCollection}
            collections={collections}
            handleClick={handleClick}
          />
        </div>
        <div className="collection-view col-lg-10 px-0"> 
          <Collection 
            selectedCollection={currentCollection} 
            handleSubmit={handleSubmit} 
            handleQuestion={handleQuestion}
            handleAnswer={handleAnswer}
            handleQuestionChange={handleQuestionChange}
            handleAnswerChange={handleAnswerChange}
            handleEditSubmit={handleEditSubmit}
            handleDeleteClick={handleDeleteCard}
            handleEditClick={handleEditClick}
            handlePracticeMode={practiceMode}
            editQuestion={editQuestion}
            editAnswer={editAnswer}
            editCard={editCard}
            question={question}
            answer={answer}
            cards={collections[currentCollection]}
            practice={practice}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
