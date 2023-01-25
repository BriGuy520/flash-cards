import React from 'react';

interface Cards {
  cards: {
    id: number,
    question: string,
    answer: string,
  }[]
}

const Collection: React.FC<Cards> = (props) => {

  return (
    <>
      <h1>Collection</h1>
      <div>

        {props.cards.map(card => {
          return (
            <div className="card">
              <div className="card-front">
                <h2>{card.question}</h2>
              </div>
              <div className="card-back">
                <p>{card.answer}</p>
              </div>
            </div>
          );
        })}
        
      </div>
    </>
  )
  
}

export default Collection;