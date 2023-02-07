import React from 'react';

interface CollectionsProps {
  createCollection: React.ChangeEventHandler<HTMLInputElement>,
  handleAddCollection: React.KeyboardEventHandler<HTMLInputElement>,
  handleClick: (value: string) => void,
  collectionName: string,
  currentCollection: string,
  collections: {
    [key: string]: Array<object>
  },
}

const Collections = ({createCollection, handleAddCollection, handleClick, collectionName, currentCollection, collections}: CollectionsProps) => {
  
  const collectionList: string[] = Object.keys(collections);

  return (
    <div className="p-2 lg-row-2">
      <p className="mb-1"><strong>Collections</strong> ({collectionList.length})</p>
      <ul className="collections-list">
        {collectionList.map(collection => {
          const total: number = collections[collection].length;
          return <li className={collection === currentCollection ? 'active' : ''} key={collection} onClick={() => handleClick(collection)}>{collection} ({total})</li>
        })}
        <li className="pl-0 ml-0"><input className="add-collection" onChange={createCollection} onKeyDown={handleAddCollection} value={collectionName}/></li>
      </ul>
      
    </div>
  )

}

export default Collections;