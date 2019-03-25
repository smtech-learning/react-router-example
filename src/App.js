import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch , NavLink} from "react-router-dom";
import './App.css';
import Menu from './Components/Menu';
import About from './Components/About';
import Topics from './Components/Topics';
import List from './Components/List';


class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <header className="App-header">
            <Menu />
        </header>
          <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/list" component={List} />
        
      </BrowserRouter>
    );
  }
}
export default App;
