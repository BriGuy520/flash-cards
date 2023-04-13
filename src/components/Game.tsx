import React from 'react';
import CardComponents from './CardComponents';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

import { CardDetails } from './Collection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CardActionProps } from './CardList';

type CardProps = {
  answer: string, 
  question: string,
  cards: Array<CardDetails>
}

type GameProps = CardActionProps & CardProps;

const Game = ({question, answer, cards, showQuestion, handleCardStateClick}: GameProps) => {

  const [currentCard, setCurrentCard] = React.useState(0);

  console.log(cards);

  return (
    <div className="game-container py-4">
      <h3>{currentCard + 1} / {cards.length}</h3>
      <div className="game-card" onClick={handleCardStateClick}> 
        <CardComponents card={cards[currentCard]} showQuestion={showQuestion} />
      </div>
      <div className="">
        <button><FontAwesomeIcon icon={faCheck} /></button>
        <button><FontAwesomeIcon icon={faX} /></button>
      </div>
    </div>
  )

}

export default Game;