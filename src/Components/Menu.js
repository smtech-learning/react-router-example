import React from 'react'
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import '../App.css';

 function Menu() {
  return (
    <div>
          <NavLink to='/about'> About</NavLink> |
          <NavLink to='/list'> List</NavLink>
          
    </div>
  )
}
export default Menu;