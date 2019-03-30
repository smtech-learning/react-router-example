import React from "react";

function Topic({ match }) {
  return (
    <div>
    {console.log(match.url)}
      <h3>{match.params.topicId1}</h3>
    </div>
  );
}

export default Topic;

  