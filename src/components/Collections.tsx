import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface CollectionsProps {
  createCollection: React.ChangeEventHandler<HTMLInputElement>,
  handleAddCollection: React.KeyboardEventHandler<HTMLInputElement>,
  handleDeleteCollection: Function,
  handleClick: (value: string) => void,
  collectionName: string,
  currentCollection: string,
  collections: {
    [key: string]: Array<object>
  },
}

const Collections = ({createCollection, handleAddCollection, handleDeleteCollection, handleClick, collectionName, currentCollection, collections}: CollectionsProps) => {
  
  const collectionList: string[] = Object.keys(collections);
  
  return (
    <div className="p-2 lg-row-2">
      <p className="mb-1"><strong>Collections</strong> ({collectionList.length})</p>
      <ul className="collections-list">
        {collectionList.map(collection => {
          const total: number = collections[collection].length;
          console.log(currentCollection);
          return <li className={collection === currentCollection ? 'active' : ''} key={collection} onClick={() => handleClick(collection)}><span>{collection} ({total})</span> <span onClick={() => handleDeleteCollection(collection)} className="trashcan"><FontAwesomeIcon icon={faTrash} /></span></li>
        })}
        
        <li className="pl-0 ml-0"><input className="add-collection" onChange={createCollection} onKeyDown={handleAddCollection} value={collectionName}/></li>
      </ul>
      
    </div>
  )

}

export default Collections;