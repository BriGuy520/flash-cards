import React from 'react';


type CardProps = {
  question: string, 
  answer: string
}

const Card = ({question, answer}: CardProps) => {


  return (
    <div className="card">
      <div className="card-front">
        <p>{question}</p>

      </div>
      <div className="card-back">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Card;