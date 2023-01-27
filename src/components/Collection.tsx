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

type Card = {
  id: number,
  question: string,
  answer: string, 
}

interface CollectionProps {
  selectedCollection: string,
  handleSubmit: React.FormEventHandler<HTMLFormElement>, 
  handleAnswer: React.ChangeEventHandler<HTMLTextAreaElement>,
  handleQuestion: React.ChangeEventHandler<HTMLInputElement>,
  answer: string, 
  question: string,
  cards: Array<Card>
}

const Collection = ({
  selectedCollection, 
  handleSubmit,
  handleAnswer, 
  handleQuestion, 
  answer, 
  question,
  cards,
 }: CollectionProps) => {



  return (
    <div className="border py-3">
      <h1>{selectedCollection} Collection</h1>
      <div className="row justify-content-center">
    
        {cards?.map(card => {
            return <Card question={card.question} answer={card.answer} />
          })}

        <div className="col-lg-3 card m-3 col-lg-6">
        
          <CreateCard 
            handleSubmit={handleSubmit} 
            handleQuestion={handleQuestion} 
            handleAnswer={handleAnswer} 
            answer={answer} 
            question={question} 
          />
        </div>

  
      </div>
      
    </div>
  )
  
}

export default Collection;