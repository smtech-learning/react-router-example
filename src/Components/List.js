import React from 'react'
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import List1 from './List1';
import List2 from './List2';



function List({ match }) {
  return (
    <div>
          <h1> List</h1>
          <NavLink to={`${match.url}/wonderfull-world`}> List1</NavLink> |
          <Link to={`${match.url}/components`}>Components</Link>

            <hr />
          <Route path={`${match.path}/:topicId`} component={Topic} />
              
              <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
              />
              
           

    </div>
  )
 }

 function Topic({ match }) {
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
}
  
export default List;
