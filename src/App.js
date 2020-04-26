import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

//components
import Home from './components/home';
import About from './components/about';
import Resume from './components/resume';
import inProgress from './components/inprogress';
import Complete from './components/complete';
import NotFound from './components/404notfound';

//styled

const Navbar = styled.nav`
  width: 100vw;
  top: 0px;
  position: absolute;
  background: transparent;
  text-align: right;
  height: 35px;
  font-size: 25px;
  color: orange;
`;

const NavButton = styled.button`
  transition: all 0.1s linear;
  border: 1px solid #e1a87a;
  padding: 13px 26px;
  background-color: transparent;
  margin-right: 20px;
  color: white;
  font-size: 15px;
`;

function App() {
  return (
    <Router>
      <Navbar>
        <Link to='/completed'>
          <NavButton>Completed Projects</NavButton>
        </Link>
        <Link to='/in-progress'>
          <NavButton>In Progress</NavButton>
        </Link>
        <Link to='/about'>
          <NavButton>About Me</NavButton>
        </Link>
      </Navbar>
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
