import React from "react";
import Menu from './Menu';
import Home from './Home';
import Soy from './Soy';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Menu />
          <SwitchRoutes />
        </Router>
    </>
  );
}

function SwitchRoutes() {
    return (
      <>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/iam" children={<Soy />} />
        </Switch>
  
      </>
    );
  }

export default App;
