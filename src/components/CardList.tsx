import Card from './Card';
import CreateCard from './CreateCard';

import { CollectionProps } from './Collection';

export type CardActionProps = {
  handleCardStateClick: Function,
  showQuestion: boolean,
}

type CardListProps = CollectionProps & CardActionProps;

const CardList = ({
  selectedCollection, 
  handleSubmit,
  handleAnswer, 
  handleQuestion, 
  handleQuestionChange, 
  handleAnswerChange,
  handleEditSubmit,
  handleCardStateClick,
  handleDeleteClick,
  handleEditClick,
  editCard,
  editQuestion,
  editAnswer,
  showQuestion,
  answer, 
  question,
  cards,
 }: CardListProps) => {

  return (
    <div className="row">
    
      {cards?.map(card => {
          return (
            <Card 
              key={card.id} 
              card={card} 
              showQuestion={showQuestion}
              editCard={editCard}
              handleDeleteCard={handleDeleteClick} 
              handleEditCardClick={handleEditClick}
              editQuestion={editQuestion}
              editAnswer={editAnswer}
              handleCardStateClick={handleCardStateClick}
              handleEditSubmit={handleEditSubmit}
              handleQuestionChange={handleQuestionChange}  
              handleAnswerChange={handleAnswerChange} 
            />
          );
        })}

      <div className="card m-3">   
        <CreateCard 
          handleSubmit={handleSubmit} 
          handleQuestion={handleQuestion} 
          handleAnswer={handleAnswer} 
          answer={answer} 
          question={question} 
          action={"Add Card"}
        >+
        </CreateCard>
      </div>
    </div>
  )

}


export default CardList;