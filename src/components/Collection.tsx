import React from 'react';
import CreateCard from './CreateCard';


const Collection: React.FC = () => {

  const [cards, setCards] = React.useState<string[]|null>([]);

  return (
    <>
      <h1>Collection</h1>
      <div>
        <CreateCard />
      </div>
    </>
  )
  
}

export default Collection;