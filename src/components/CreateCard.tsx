import React from 'react';

type CreateCardProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
  handleAnswer: React.ChangeEventHandler<HTMLTextAreaElement>,
  handleQuestion: React.ChangeEventHandler<HTMLInputElement>,
  question: string,
  answer: string,
  children: string,
}

const CreateCard = ({handleSubmit, handleQuestion, handleAnswer, question, answer, children}: CreateCardProps) => {

  const [addCard, setAddCard] = React.useState<boolean>(true);

  return (
    <div className="d-flex flex-column m-3">    
     <div style={{display: addCard ? 'block' : 'none'}} className="form-side">


        <form onSubmit={handleSubmit}>
          <div className="form-group my-2">
            <label htmlFor="Question">Question</label>
            <input 
              className="p-1 form-control"
              type="text" 
              value={question} 
              onChange={handleQuestion} 
              name="question" 
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="Answer">Answer</label>
            <textarea
              className="form-control"
              value={answer} 
              onChange={handleAnswer}
              name="Answer" 
              rows={6}
            />
            <input className="btn btn-primary" type="submit" value="Add Card" />
          </div>
        </form>
     </div>
     <div style={{display: addCard ? 'none' : 'block'}} className="front-side">
      <p>{children} Add New Card</p>
     </div>
    </div>
  )

}

export default CreateCard;
