import React from 'react'
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import '../App.css';

 function Menu() {
  return (
    <div>
          <NavLink to='/about'> About</NavLink> |
          <NavLink to='/topics'> Topics</NavLink>
          
    </div>
  )
}
export default Menu;