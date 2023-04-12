import React from 'react';
import Card from './Card';
import CreateCard from './CreateCard';
import CardList from './CardList';

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

export interface CollectionProps {
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

  const [highScore, setHighScore] = React.useState<number>(0);
  const [playGame, setPlayGame] = React.useState<boolean>(false);


  const gameMode = () => {
    console.log("Game Mode Initiated");

    setPlayGame(!playGame);
  }


  return (
    <div className="border collection-content py-3">
      <div className="collection-header">
        <h1>{selectedCollection} Collection</h1>
        <div className="">
          <button onClick={gameMode} className="btn btn-outline-primary">Play</button>
        </div>
      </div>
      <div className="">
        High Score: {highScore}
      </div> 
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
    </div>
  )
  
}

export default Collection;