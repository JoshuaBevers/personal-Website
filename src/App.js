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
  display: flex;
  width: 100vw;
  top: 1vh;
  background: black;
  text-align: right;
  height: 94px;
  font-size: 25px;
  justify-content: center;
  color: orange;
  /* flex-direction: column; */
  flex-wrap: wrap;
`;

const NavButton = styled.button`
  transition: all 0.1s linear;
  border: 1px solid #e1a87a;
  padding: 13px 26px;
  background-color: black;
  color: orange;
  margin-right: 5px;
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
        <Link to='/'>
          <NavButton>Home</NavButton>
        </Link>
      </Navbar>
      <div className='App'>
        {<Route path='/' component={Home} />}
        {<Route path='/about' component={About} />}
        {<Route path='/resume' component={Resume} />}
        {<Route path='/in-progress' component={inProgress} />}
        {<Route path='/completed' component={Complete} />}
        {<Route path='/404' component={NotFound} />}
      </div>
    </Router>
  );
}

export default App;
