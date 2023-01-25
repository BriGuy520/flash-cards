import React from 'react';

interface CollectionsProps {
  createCollection: React.ChangeEventHandler<HTMLInputElement>,
  collectionName: string,
}

const Collections = ({createCollection, collectionName}: CollectionsProps) => {

  const [collections, setCollections] = React.useState<object[]>([])


  return (
    <div>
      <p>Collections</p>
      <ul>
      </ul>
      <input onChange={createCollection} value={collectionName}/>
    </div>
  )

}

export default Collections;