import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import logo from '../logo.svg';

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
