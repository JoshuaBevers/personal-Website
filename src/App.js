import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//components
import Home from './components/home';
import About from './components/about';
import Resume from './components/resume';
import inProgress from './components/inprogress';
import Complete from './components/complete';
import NotFound from './components/404notfound';

function App() {
  return (
    <Router>
      <div className='App'>
        {<Route exact path='/' component={Home} />}
        {<Route exact path='/about' component={About} />}
        {<Route exact path='/resume' component={Resume} />}
        {<Route exact path='/in-progress' component={inProgress} />}
        {<Route exact path='/completed' component={Complete} />}
        {<Route path='/404' component={NotFound} />}
      </div>
    </Router>
  );
}

export default App;
