import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//components
import Home from "./components/home";
import About from "./components/about";
import Resume from "./components/resume";

function App() {
  return (
    <Router>
      <div className="App">
        {<Route exact path="/" component={Home} />}
        {<Route exact path="/about" component={About} />}
        {<Route exact path="/resume" component={Resume} />}
      </div>
    </Router>
  );
}

export default App;
