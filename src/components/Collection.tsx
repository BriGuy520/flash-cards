import React from 'react';
import Card from './Card';
import CreateCard from './CreateCard';

// interface Cards {
//   cards: {
//     id: number,
//     question: string,
//     answer: string,
//   }[]
// }

export type CardDetails = {
  id: number,
  question: string,
  answer: string, 
}

interface CollectionProps {
  selectedCollection: string,
  handleSubmit: React.FormEventHandler<HTMLFormElement>, 
  handleEditSubmit: React.FormEventHandler<HTMLFormElement>,
  handleAnswer: React.ChangeEventHandler<HTMLTextAreaElement>,
  handleQuestion: React.ChangeEventHandler<HTMLInputElement>,
  handleAnswerChange:  React.ChangeEventHandler<HTMLTextAreaElement>,
  handleQuestionChange: React.ChangeEventHandler<HTMLInputElement>,
  editQuestion: string,
  editAnswer: string,
  handleDeleteClick: Function,
  handleEditClick: Function,
  editCard: Array<number>,
  answer: string, 
  question: string,
  cards: Array<CardDetails>
}

const Collection = ({
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
 }: CollectionProps) => {

  return (
    <div className="border collection-content py-3">
      <h1>{selectedCollection} Collection</h1>
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
                handleAnswerChange={handleAnswerChange} />
            );
          })}

        <div className="card m-3">   
          <CreateCard 
            handleSubmit={handleSubmit} 
            handleQuestion={handleQuestion} 
            handleAnswer={handleAnswer} 
            answer={answer} 
            question={question} 
            action={"Add Card"}
          >+
          </CreateCard>
        </div>
      </div>  
    </div>
  )
  
}

export default Collection;