import React from 'react';
import { CardDetails } from "../App";
import CreateCard from './CreateCard';
import CardComponents from './CardComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

type CardProps = {
  card: CardDetails,
  editCard: Array<number>,
  editQuestion: string,
  editAnswer: string,
  handleDeleteCard: Function,
  handleEditCardClick: Function,
  handleQuestionChange: React.ChangeEventHandler<HTMLInputElement>,
  handleAnswerChange: React.ChangeEventHandler<HTMLTextAreaElement>,
  handleEditSubmit: React.FormEventHandler<HTMLFormElement>,
}

const Card = ({
  card, 
  editCard, 
  editQuestion, 
  editAnswer, 
  handleDeleteCard, 
  handleEditCardClick,
  handleEditSubmit, 
  handleQuestionChange, 
  handleAnswerChange}: CardProps) => {

    const [showQuestion, setShowQuestion] = React.useState<boolean>(true);

    React.useEffect(() => {
  
      if(editCard.length){
    
        setShowQuestion(true);
      }
    }, [editCard])
  
    const handleCardStateClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
  
      setShowQuestion(!showQuestion);    
    }

  if(editCard[0] === card.id){

    return (
      <div className="col-lg-3 card m-3"> 
        <CreateCard 
          question={editQuestion} 
          answer={editAnswer} 
          action={"Edit Card"}
          editCard={editCard}
          showQuestion={showQuestion}
          handleAnswer={handleAnswerChange} 
          handleQuestion={handleQuestionChange} 
          handleSubmit={handleEditSubmit}
        />
      </div>      
    ); 

  } else {

    return (
      <div className="card m-3" onClick={handleCardStateClick}>
        <div className="flip-card-inner">
          <button className="edit-icon" onClick={() => handleEditCardClick(card.id)}><FontAwesomeIcon icon={faPenToSquare} /></button>
          <button className="delete-icon" onClick={() => handleDeleteCard(card.id)}><FontAwesomeIcon icon={faTrash} /></button>
          <CardComponents card={card} showQuestion={showQuestion} />
        </div>
      </div>
    )
  }
}

export default Card;