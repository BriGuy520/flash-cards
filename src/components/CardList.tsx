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

  const [showQuestion, setShowQuestion] = React.useState<boolean>(true);

  console.log(showQuestion);

  React.useEffect(() => {

    if(editCard.length){

      console.log("EDIT CARD USE EFFECT");
      setShowQuestion(true);
    }
  }, [editCard])

  const handleCardStateClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setShowQuestion(!showQuestion);    
  }


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
              showQuestion={showQuestion}
              handleCardStateClick={handleCardStateClick}
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
            showQuestion={true}
            answer={answer} 
            question={question} 
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