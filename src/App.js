import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch , NavLink} from "react-router-dom";
import './App.css';
import Menu from './Components/Menu';
import List from './Components/List';
import About from './Components/About';
import CatchAll from './Components/CatchAll';
import List1 from './Components/List1';
import List2 from './Components/List2';


class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <div className="App">
            <header className="App-header">
            <Menu />
          </header>
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/list" exact component={List} >
                <Route path="/list1" exact component={List1} />
                <Route path="/list2" exact component={List2} />
            </Route>
            <Route path="*" component={CatchAll} />
          </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
