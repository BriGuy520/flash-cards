import React from 'react';

type CreateCardProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
  handleAnswer: React.ChangeEventHandler<HTMLTextAreaElement>,
  handleQuestion: React.ChangeEventHandler<HTMLInputElement>,
  question: string,
  answer: string
}

const CreateCard = ({handleSubmit, handleQuestion, handleAnswer, question, answer}: CreateCardProps) => {


  return (
    <div className="d-flex flex-column m-3">    
      <form onSubmit={handleSubmit}>
        <label htmlFor="Question">Question</label>
        <input 
          className="w-100 p-2"
          type="text" 
          value={question} 
          onChange={handleQuestion} 
          name="question" 
        />
        <label htmlFor="Answer">Answer</label>
        <textarea
          value={answer} 
          onChange={handleAnswer}
          name="Answer" 
        />
        <input className="btn btn-primary" type="submit" value="Add Card" />
      </form>
    </div>
  )

}

export default CreateCard;
