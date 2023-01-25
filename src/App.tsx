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
  const [cards, setCards] = React.useState<Card[]>([]);

  console.log(cards);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const newCard: Card = {
      id: Date.now(),
      question,
      answer
    }

    setCards(prevCards => [...prevCards, newCard]);

  }

  const handleAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();


    setAnswer(e.target.value);
  }

  const handleQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setQuestion(e.target.value);

  }

  return (
    <div className="App">
      <h1>Flash Cards</h1>
      <Collections />
      <Collection cards={cards} />
      <CreateCard handleSubmit={handleSubmit} handleQuestion={handleQuestion} handleAnswer={handleAnswer} answer={answer} question={question} />
    </div>
  );
}

export default App;
