import React from 'react';


type CardProps = {
  question: string, 
  answer: string
}

const Card = ({question, answer}: CardProps) => {


  return (
    <div className="card m-3 col-lg-3">
      <div className="card-front card-body">
        <h2>{question}</h2>

      </div>
      <div className="card-back card-body">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Card;