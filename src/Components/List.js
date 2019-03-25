import React from 'react'
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import List1 from './List1';
import List2 from './List2';
import ListCatchAll from './ListCatchAll';

 function List() {
  return (
    <div>
          <h1> List</h1>
          <NavLink to='/list/list1'> List1</NavLink> |
          <NavLink to='/list/list2'> List2</NavLink> 
          
          <Switch>
          <Route path="/list/list1" exact component={List1} />
          <Route path="/list/list2" exact component={List2} />
          <Route path="*"  component={ListCatchAll} />
          
          
          </Switch>

                  
    </div>
  )
 }

export default List;
