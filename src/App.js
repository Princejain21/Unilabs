import React from "react";
import Middle from "./component/Home/Middle";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./component/About/About";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/Unilabs'>
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
