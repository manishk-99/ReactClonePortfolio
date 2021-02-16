import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./Components/index";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import About from "./Components/About";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Blogs" component={Blogs} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}
