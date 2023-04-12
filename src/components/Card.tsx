import React from 'react';
import { CardDetails } from "./Collection";
import CreateCard from './CreateCard';
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

const Card = ({card, editCard, editQuestion, editAnswer, handleEditSubmit, handleDeleteCard, handleQuestionChange, handleAnswerChange, handleEditCardClick}: CardProps) => {

  const [showQuestion, setShowQuestion] = React.useState<boolean>(true);

 React.useEffect(() => {

  if(editCard.length){
    setShowQuestion(true);
  }
 }, [editCard])

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
          showQuestion={showQuestion}
          handleAnswer={handleAnswerChange} 
          handleQuestion={handleQuestionChange} 
          handleSubmit={handleEditSubmit}
        />
      </div>      
    ); 
  } else {

    return (
      <div className="card m-3" onClick={handleCardClick}>
        <div className="flip-card-inner">
          <button className="edit-icon" onClick={() => handleEditCardClick(card.id)}><FontAwesomeIcon icon={faPenToSquare} /></button>
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

  
}

export default Card;