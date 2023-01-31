import React from 'react';
import Card from './Card';
import CreateCard from './CreateCard';

// interface Cards {
//   cards: {
//     id: number,
//     question: string,
//     answer: string,
//   }[]
// }

type Card = {
  id: number,
  question: string,
  answer: string, 
  collection: string,
}

interface CollectionProps {
  selectedCollection: string,
  allCollections: {[key: string]: any},
}

const Collection = ({selectedCollection, allCollections}: CollectionProps) => {

  const [question, setQuestion] = React.useState<string>('');
  const [answer, setAnswer] = React.useState<string>('');
  const [cards, setCards] = React.useState<Card[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCard: Card = {
      id: Date.now(),
      question,
      answer, 
      collection: selectedCollection,
    }

    console.log(allCollections[selectedCollection]);

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
    <>
      <h1>{selectedCollection} Collection</h1>
      <div>
        {cards.map(card => {
          if(card.collection == selectedCollection){
            return <Card question={card.question} answer={card.answer}  />
          }
        })}
        <CreateCard handleSubmit={handleSubmit} handleQuestion={handleQuestion} handleAnswer={handleAnswer} answer={answer} question={question} />
      </div>
    </>
  )
  
}

export default Collection;