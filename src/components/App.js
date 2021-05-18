import React from "react";
import Menu from './Menu';
import Home from './Home';
import Soy from './Soy';
import Portfolio from './Portfolio';
import Site from './Site';

import './App.scss';
import {
  HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
    <>
        <Router basename="/pamelapz">
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
        <Route path="/portfolio" children={<Portfolio />} />
        <Route path="/site" children={<Site />} />
      </Switch>

    </>
  );
}

export default App;
