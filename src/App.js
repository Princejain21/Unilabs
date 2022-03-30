import React from "react";
import Middle from "./component/Home/Middle";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./component/About/About";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Middle />
          </Route>
          <Route exact path='/About'>
            <About />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
