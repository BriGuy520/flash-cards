import React from 'react';

type CreateCardProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
  handleAnswer: React.ChangeEventHandler<HTMLTextAreaElement>,
  handleQuestion?: React.ChangeEventHandler<HTMLInputElement>,
  showQuestion?: boolean,
  action: string, 
  question: string,
  answer: string,
  children?: string | undefined,
}

const CreateCard = ({
  handleSubmit, 
  handleQuestion, 
  handleAnswer, 
  showQuestion,
  action,
  question, 
  answer, 
  children,
}: CreateCardProps) => {

  const [cardFront, setCardFront] = React.useState<boolean>(true);

  return (
    <div className="d-flex flex-column m-3">    
     <div style={{display: cardFront ? 'none' : 'block'}} className="form-side">
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
            <input className="btn btn-primary" type="submit" value={action} onClick={() => setCardFront(true)} />
          </div>
        </form>
     </div>
     <div style={{display: cardFront ? 'block' : 'none'}} className="front-side" onClick={() => setCardFront(false)}>
      <p>{children} Card</p>
     </div>
    </div>
  )

}

export default CreateCard;
