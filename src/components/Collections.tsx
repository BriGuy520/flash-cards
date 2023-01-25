import React from 'react';

const Collections: React.FC = () => {

  const [collectionName, setCollectionName] = React.useState<string>('');
  const [readyToAdd, setReadyToAdd] = React.useState<boolean>(false);


  const createCollection = () => {

  }

  return (
    <div>
      <p>Collections</p>
      <ul>
        <li onClick={createCollection}>Start New Collection...</li>
      </ul>
    </div>
  )

}

export default Collections;