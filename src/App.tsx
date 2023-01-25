import React from 'react';
import './App.css';
import Collection from './components/Collection';
import Collections from './components/Collections';
import CreateCard from './components/CreateCard';

type Card = {
  id: number,
  question: string,
  answer: string
}

function App(): any {


  const [question, setQuestion] = React.useState<string>('');
  const [answer, setAnswer] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const newCard: Card = {
      id: Date.now(),
      question,
      answer
    }

    console.log(newCard);

    return newCard;

  }

  return (
    <div className="App">
      <h1>Flash Cards</h1>
      <Collections />
      <Collection />
    </div>
  );
}

export default App;
