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
    <form onSubmit={handleSubmit}>
      <label htmlFor="Question">Question</label>
      <input 
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
      <input type="submit" value="Add Card" />
    </form>
  )

}

export default CreateCard;
