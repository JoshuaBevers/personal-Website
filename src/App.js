import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

//components
import Home from './pages/home';
import About from './pages/about';
import Complete from './pages/complete';
import Resume from './pages/resume';

//styled

const Navbar = styled.nav`
  display: flex;
  width: calc(100vw - (100vw - 100%));
  top: 1vh;
  background: black;
  text-align: right;
  padding-bottom: 1vh;
  font-size: 25px;
  flex-wrap: wrap;
`;

function App() {
  return (
    <Router>
      <Navbar>
        <Link to='/'>
          <button className='navbutton'>Home</button>
        </Link>
        <Link to='/projects'>
          <button className='navbutton'>Projects</button>
        </Link>
        {/* <Link to='/about'>
          <button className='navbutton'>Me</button>
        </Link> */}
      </Navbar>

      {<Route exact path='/' component={Home} />}
      {<Route exact path='/about' component={About} />}
      {<Route exact path='/projects' component={Complete} />}
      {/* {<Route exact path='/resume' component={Resume} />} */}
    </Router>
  );
}

export default App;
