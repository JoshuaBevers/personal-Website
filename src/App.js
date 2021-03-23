import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

//components
import Home from './components/home';
import About from './components/about';
import Complete from './components/complete';

//styled

const Navbar = styled.nav`
  display: flex;
  width: calc(100vw - (100vw - 100%));
  top: 1vh;
  background: black;
  text-align: right;
  height: 10vh;
  font-size: 25px;
  justify-content: center;
  color: orange;
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

  @media only screen and (max-width: 600px) {
    padding: 10px 14px;
  }
`;

const BG = styled.div`
  background-color: lightgray;
`;

function App() {
  return (
    <BG>
      <Router>
        <Navbar>
          <Link to='/'>
            <NavButton>Home</NavButton>
          </Link>
          <Link to='/completed'>
            <NavButton>Favorite Projects</NavButton>
          </Link>
          <Link to='/about'>
            <NavButton>Favorite Me</NavButton>
          </Link>
        </Navbar>
        <>
          {<Route exact path='/' component={Home} />}
          {<Route exact path='/about' component={About} />}
          {<Route exact path='/completed' component={Complete} />}
        </>
      </Router>
    </BG>
  );
}

export default App;
