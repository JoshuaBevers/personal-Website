import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import logo from '../logo.svg';

function Home() {
  useRef(() => {
    document.title = 'Home';
  }, []);
  return (
    <div className='homeHeader'>
      <div className='name'>
        Joshua Bevers
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <p className='smallHeader'>
        Full-stack developer, pet enthusiast, and part-time giant. Ready to
        develop, both programatically and otherwise.
      </p>
      <div>
        {/* <Link to='/resume'>
          <button className='openingButton'>Resume</button>
        </Link> */}
        <Link to='/projects'>
          <button className='openingButton'>Portfolio</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
