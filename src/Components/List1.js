import React from 'react'

function List1({match}) {
  return (
    <div>
          <h1> {match.params.topicId}}</h1>
    </div>
  )
}
export default List1;
