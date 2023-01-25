import React from 'react';
import Card from './Card';

interface Cards {
  cards: {
    id: number,
    question: string,
    answer: string,
  }[]
}

const Collection: React.FC<Cards> = ({cards}) => {

  return (
    <>
      <h1>Collection</h1>
      <div>

        {cards.map(card => {
          return <Card question={card.question} answer={card.answer}  />
        })}
        
      </div>
    </>
  )
  
}

export default Collection;