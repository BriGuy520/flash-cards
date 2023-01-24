import React from 'react';


type Card = {
  id: number,
  question: string,
  answer: string
}

const CreateCard = () => {

  const [question, setQuestion] = React.useState<string>('');
  const [answer, setAnswer] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const newCard: Card = {
      id: Date.now(),
      question,
      answer
    }

    console.log(newCard);

    return newCard;

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Question">Question</label>
      <input 
        type="text" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
        name="question" 
      />
      <label htmlFor="Answer">Answer</label>
      <input 
        type="text"
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)}
        name="Answer" 
      />
      <input type="submit" value="Add Card" />
    </form>
  )

}

export default CreateCard;
