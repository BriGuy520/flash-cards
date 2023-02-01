import React, { FunctionComponentElement } from 'react';
import { CardDetails } from "./Collection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


type CardProps = {
  card: CardDetails,
  handleDeleteCard: Function,
}

const Card = ({card, handleDeleteCard}: CardProps) => {

  const [showQuestion, setShowQuestion] = React.useState<boolean>(true);


  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setShowQuestion(!showQuestion);
  }



  return (
    <div className="card m-3 col-lg-3" onClick={handleCardClick}>
      <div className="flip-card-inner">
        <button className="edit-icon" onClick={() => console.log("edit card")}><FontAwesomeIcon icon={faPenToSquare} /></button>
        <button className="delete-icon" onClick={() => handleDeleteCard(card.id)}><FontAwesomeIcon icon={faTrash} /></button>
        <div style={{display: showQuestion ? 'block' : 'none'}} className="card-front card-body">
          <h2>{card.question}</h2>

        </div>
        <div style={{display: showQuestion ? 'none' : 'block'}} className="card-back card-body">
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;