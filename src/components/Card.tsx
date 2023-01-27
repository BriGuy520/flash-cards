import React from 'react';


type CardProps = {
  question: string, 
  answer: string
}

const Card = ({question, answer}: CardProps) => {

  const [showQuestion, setShowQuestion] = React.useState<boolean>(true);


  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setShowQuestion(!showQuestion);
  }



  return (
    <div className="card m-3 col-lg-3" onClick={handleCardClick}>
      <div style={{display: showQuestion ? 'block' : 'none'}} className="card-front card-body">
        <h2>{question}</h2>

      </div>
      <div style={{display: showQuestion ? 'none' : 'block'}} className="card-back card-body">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Card;