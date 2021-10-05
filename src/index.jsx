import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/netflix-clone' component={Welcome} />
        <Route path='/netflix-clone/app' component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")

);
