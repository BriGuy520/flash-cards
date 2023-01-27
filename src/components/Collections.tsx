import React from 'react';

interface CollectionsProps {
  createCollection: React.ChangeEventHandler<HTMLInputElement>,
  handleAddCollection: React.KeyboardEventHandler<HTMLInputElement>,
  handleClick: (value: string) => void,
  collectionName: string,
  collections: object,
}

const Collections = ({createCollection, handleAddCollection, handleClick, collectionName, collections}: CollectionsProps) => {
  
  const collectionList: string[] = Object.keys(collections);

  return (
    <div className="p-2 lg-row-2">
      <p><strong>Collections</strong></p>
      <ul className="collections-list">
        {collectionList.map(collection => {
          return <li key={collection} onClick={() => handleClick(collection)}>{collection}</li>
        })}
        <li><input className="add-collection" onChange={createCollection} onKeyDown={handleAddCollection} value={collectionName}/></li>
      </ul>
      
    </div>
  )

}

export default Collections;