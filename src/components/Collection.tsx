import React from 'react';
import CardList from './CardList';
import Practice from './Practice';

import { CardDetails } from '../App';

// interface Cards {
//   cards: {
//     id: number,
//     question: string,
//     answer: string,
//   }[]
// }

export interface CardListProps {
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

interface PracticeProps {
  practice: boolean,
  shuffleCards: React.MouseEventHandler<HTMLButtonElement>,
  handlePracticeMode: React.MouseEventHandler<HTMLButtonElement>,
}

type CollectionProps = CardListProps & PracticeProps;

const Collection = ({
  selectedCollection, 
  handleSubmit,
  handleAnswer, 
  handleQuestion, 
  handleQuestionChange, 
  handleAnswerChange,
  handleEditSubmit,
  handlePracticeMode,
  shuffleCards,
  handleDeleteClick,
  handleEditClick,
  editCard,
  editQuestion,
  editAnswer,
  answer, 
  question,
  cards,
  practice
 }: CollectionProps) => {

  const disableCard: boolean = cards && cards.length >= 1 ? false : true;

  return (
    <div className="border collection-content py-3">
      <div className="collection-header">
        <h1>{selectedCollection} Collection</h1>
        <div className="">
          <button disabled={disableCard} onClick={handlePracticeMode} className="btn btn-outline-primary">{practice ? "End Practice" : "Practice"}</button>
        </div>
      </div>
      {practice ?  
        <Practice
          shuffleCards={shuffleCards}
          cards={cards}
        />
      :
        <CardList
          selectedCollection={selectedCollection} 
          handleSubmit={handleSubmit} 
          handleQuestion={handleQuestion}
          handleAnswer={handleAnswer}
          handleQuestionChange={handleQuestionChange}
          handleAnswerChange={handleAnswerChange}
          handleEditSubmit={handleEditSubmit}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={handleEditClick}
          editQuestion={editQuestion}
          editAnswer={editAnswer}
          editCard={editCard}
          question={question}
          answer={answer}
          cards={cards}
        />
      }
    </div>
  )
  
}

export default Collection;