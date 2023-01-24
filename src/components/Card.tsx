import React from 'react';

const Card: React.FC = () => {

  const [question, setQuestion] = React.useState()

  return (
    <div className="card">
      <div className="card-front">
        <p>{question}</p>

      </div>
      <div className="card-back">

      </div>
    </div>
  )
}

export default Card;