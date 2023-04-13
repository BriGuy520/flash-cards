import React from 'react';
import CardComponents from './CardComponents';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { CardDetails } from './Collection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface GameProps {
  answer: string, 
  question: string,
  cards: Array<CardDetails>
}

const Game = ({question, answer, cards}: GameProps) => {

  const [currentCard, setCurrentCard] = React.useState(0);

  console.log(cards);

  return (
    <div className="game-container py-4">
      <h3>{currentCard} / {cards.length}</h3>
      <h1>Game Mode</h1>
      <div className="game-card">
        {/* <CardComponents card={cards[currentCard]} /> */}
      </div>
      <div className="">
        <button><FontAwesomeIcon icon={faCheck} /></button>
      </div>
    </div>
  )

}

export default Game;