import React from 'react';
import CardComponents from './CardComponents';
import { faCheck, faX, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

  const nextCard = () => {

    setCurrentCard(currentCard + 1);
  }

  const prevCard = () => {
    
    setCurrentCard(currentCard - 1);
  }

  return (
    <div className="game-container py-4">
      <h3>{currentCard + 1} / {cards.length}</h3>
      <div style={{'display': 'flex'}}>
        <button className="chevron-left-btn" onClick={prevCard}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <div className="game-card" onClick={handleCardStateClick}> 
          <CardComponents card={cards[currentCard]} showQuestion={showQuestion} />
        </div>
        <button className="chevron-right-btn" onClick={nextCard}><FontAwesomeIcon icon={faChevronRight} /></button>
        <div className="game-functions">
          <button className="check-button"><FontAwesomeIcon icon={faCheck} /></button>
          <button className="x-button"><FontAwesomeIcon icon={faX} /></button>
        </div>
      </div>
    </div>
  )

}

export default Game;