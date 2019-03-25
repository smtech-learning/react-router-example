import React from 'react'
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import List1 from './List1';
import List2 from './List2';
import ListCatchAll from './ListCatchAll';

 function List() {
  return (
    <div>
          <h1> List</h1>
          <NavLink to='/list1'> List1</NavLink> |
          <NavLink to='/list2'> List2</NavLink> 
    </div>
  )
 }

export default List;
