import React from 'react';
import Card from './Card';
import CreateCard from './CreateCard';

import { CardListProps } from './Collection';

const CardList = ({
  selectedCollection, 
  handleSubmit,
  handleAnswer, 
  handleQuestion, 
  handleQuestionChange, 
  handleAnswerChange,
  handleEditSubmit,
  handleDeleteClick,
  handleEditClick,
  editCard,
  editQuestion,
  editAnswer,
  answer, 
  question,
  cards,
 }: CardListProps) => {

  return (
    <div className="row">
    
      {cards?.map(card => {
          return (
            <Card 
              key={card.id} 
              card={card} 
              editCard={editCard}
              handleDeleteCard={handleDeleteClick} 
              handleEditCardClick={handleEditClick}
              editQuestion={editQuestion}
              editAnswer={editAnswer}
              handleEditSubmit={handleEditSubmit}
              handleQuestionChange={handleQuestionChange}  
              handleAnswerChange={handleAnswerChange} 
            />
          );
        })}
      {selectedCollection !== "Start a New " ?
      
        <div className="card m-3">   
          <CreateCard 
            handleSubmit={handleSubmit} 
            handleQuestion={handleQuestion} 
            handleAnswer={handleAnswer} 
            answer={answer} 
            question={question} 
            editCard={editCard}
            action={"Add Card"}
          >+
          </CreateCard>
        </div>

      : 
      
      ""
      }
    </div>
  )

}


export default CardList;