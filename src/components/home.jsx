import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import logo from '../logo.svg';
import styled from 'styled-components';

//images
import python from '../images/python-logo.jpg';
import node from '../images/node.png';
import postgres from '../images/postgres.png';
import react from '../images/react.png';
import redux from '../images/redux.jpeg';
import github from '../images/github.png';
import coding from '../images/coding.webp';
import chakram from '../images/chakram.webp';
import html from '../images/html.jpeg';
import jquery from '../images/Jquery.jpeg';
import MongoDB from '../images/mongodb.jpeg';

const skillBar = styled.div``;

function Home() {
  useRef(() => {
    document.title = 'Home';
  }, []);
  return (
    <>
      <div className='homeHeader'>
        <p>
          Joshua Bevers - Developer
          <img src={logo} className='App-logo' alt='logo' />
        </p>
        <p className='smallHeader'>Please Don't Panic</p>
        <div>
          <Link to='/about'>
            <button className='openingButton'>About Me</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
