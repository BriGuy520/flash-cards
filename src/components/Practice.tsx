import React from 'react';
import CardComponents from './CardComponents';
import { faCheck, faX, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { CardDetails } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type CardProps = {
  answer: string, 
  question: string,
  cards: Array<CardDetails>
}


const Practice = ({question, answer, cards}: CardProps) => {

  const [currentCard, setCurrentCard] = React.useState(0);
  const [showQuestion, setShowQuestion] = React.useState<boolean>(true);
  const [cardsPracticed, setCardsPracticed] = React.useState<any>(new Array(cards.length).fill(null));

  
  const handleCardStateClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    setShowQuestion(!showQuestion);    
  }

  const handleCurrentCardClick = (cardIdx: number) => {

    setCurrentCard(cardIdx);
  }
  
 
  const nextCard = () => {

    if(currentCard === cards.length - 1){
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    }

    setShowQuestion(true);
  }

  const prevCard = () => {
    
    if(currentCard === 0){
      setCurrentCard(cards.length - 1);
    } else {
      setCurrentCard(currentCard - 1);
    }

    setShowQuestion(true);
  }


  const cardBoxes = cardsPracticed.map((card: any, idx: number) => {

    const cardClick = () => handleCurrentCardClick(idx);

    if(idx === currentCard){

      return <p onClick={cardClick} style={{"border": "4px solid #000"}}>{card}</p>
    } else {

      return <p onClick={cardClick}>{card}</p>
    }
  })


  return (
    <div className="game-container py-4">
      <div className="card-info">
        <h3>{currentCard + 1} / {cards.length}</h3>
        <div className="boxes">
          {cardBoxes}
        </div>
      </div>
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

export default Practice;