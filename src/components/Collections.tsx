import React from 'react';

interface CollectionsProps {
  createCollection: React.ChangeEventHandler<HTMLInputElement>,
  handleAddCollection: React.KeyboardEventHandler<HTMLInputElement>,
  collectionName: string,
  collections: object,
}

const Collections = ({createCollection, handleAddCollection, collectionName, collections}: CollectionsProps) => {
  
  const collectionList: string[] = Object.keys(collections);

  return (
    <div>
      <p><strong>Collections</strong></p>
      <ul>
        {collectionList.map(collection => {
          return <li>{collection}</li>
        })}
      </ul>
      <input onChange={createCollection} onKeyDown={handleAddCollection} value={collectionName}/>
    </div>
  )

}

export default Collections;