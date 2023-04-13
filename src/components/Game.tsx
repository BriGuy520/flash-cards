import React from 'react';

import { CardDetails } from './Collection';

interface GameProps {
  answer: string, 
  question: string,
  cards: Array<CardDetails>
}

const Game = ({question, answer, cards}: GameProps) => {

  const [currentCard, setCurrentCard] = React.useState(0);

  console.log(cards);

  return (
    <div className="game-container">
      {cards.length}
      <h1>Game Mode</h1>
      <div className="game-card">
        
      </div>
    </div>
  )

}

export default Game;