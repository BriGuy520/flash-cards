import React from 'react';
import { CardDetails } from '../App';

type CardComponentsProp = {
  card: CardDetails,
  showQuestion: boolean,
}

const CardComponents = ({card, showQuestion}: CardComponentsProp) => {

  return (
    <>
      <div style={{display: showQuestion ? 'block' : 'none'}} className="card-front card-body">
        <h2>{card.question}</h2>
      </div>
      <div style={{display: showQuestion ? 'none' : 'block'}} className="card-back card-body">
        <p>{card.answer}</p>
      </div>
    </>
  );
}


export default CardComponents;