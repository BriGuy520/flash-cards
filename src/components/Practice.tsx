import React, { MouseEventHandler } from 'react';
import CardComponents from './CardComponents';
import { faCheck, faX, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { CardDetails } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type CardProps = {
  shuffleCards: MouseEventHandler<HTMLButtonElement>,
  cards: Array<CardDetails>
}


const Practice = ({cards, shuffleCards}: CardProps) => {


  const [currentCard, setCurrentCard] = React.useState(0);
  const [showQuestion, setShowQuestion] = React.useState<boolean>(true);

  const disableShuffle: boolean = cards && cards.length > 1 ? false : true;

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

  const addCheckMark = (cardIdx: number) => {

    nextCard();

    return cards.map(card => {
      if(card.id === cardIdx){
        card.practiced = faCheck;
      }

      return card;
    });
  }

  const addX = (cardIdx: number) => {

    nextCard();

    return cards.map(card => {
      if(card.id === cardIdx){
        card.practiced = faX;
      }

      return card;
    });
  }


  const cardBoxes = cards.map((card: any, idx: number) => {

    const cardClick = () => handleCurrentCardClick(idx);

    if(idx === currentCard){

      return <p key={idx} className={card.practiced === faX ? "x-button-box" : "check-button-box"} onClick={cardClick} style={{"border": "4px solid #000"}}>{card.practiced ? <FontAwesomeIcon icon={card.practiced} /> : ''}</p>
    } else {

      return <p key={idx} className={card.practiced === faX ? "x-button-box" : "check-button-box"} onClick={cardClick}>{card.practiced ? <FontAwesomeIcon icon={card.practiced} /> : ''}</p>
    }
  })

  const clearPracticed = () => {

    setCurrentCard(0);

    return cards.map(card => {
      card.practiced = null;

      return card;
    });
  }


  return (
    <div className="game-container py-4">
      <div className="card-info">
        <h3>{currentCard + 1} / {cards.length}</h3>
        <div className="boxes">
          {cardBoxes}
          <button className="btn btn-outline-purple" style={{'marginLeft': '10px'}} disabled={disableShuffle} onClick={shuffleCards}>Shuffle</button>
          <button className="btn btn-outline-danger" style={{'marginLeft': '10px'}} onClick={clearPracticed}>Clear</button>
        </div>
      </div>
      <div className="practice-functions" style={{'display': 'flex'}}>
        <div className="card-functions">
          <button className="chevron-left-btn" onClick={prevCard}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <div className="game-card" onClick={handleCardStateClick}> 
            <CardComponents card={cards[currentCard]} showQuestion={showQuestion} />
          </div>
          <button className="chevron-right-btn" onClick={nextCard}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
        <div className="answer-functions">
          <button onClick={() => addCheckMark(cards[currentCard].id)} className="check-button"><FontAwesomeIcon icon={faCheck} /></button>
          <button onClick={() => addX(cards[currentCard].id)} className="x-button"><FontAwesomeIcon icon={faX} /></button>
        </div>
      </div>
    </div>
  )

}

export default Practice;