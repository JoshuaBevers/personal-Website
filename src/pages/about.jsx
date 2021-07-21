import React, { useEffect } from 'react';
import { DiGithubBadge } from 'react-icons/di';

import ferret from '../images/ferret.png';

import './about.css';

function About() {
  useEffect(() => {
    document.title = 'About Me';
  }, []);

  return (
    <div className='aboutme'>
      <div className='banner'>
        <img src={ferret} alt='ferret' />
        <div className='banner-text'>
          <h1 style={{ color: 'orange' }}>
            <span className='title'>Abo</span>
            ut
          </h1>
          <p style={{ maxWidth: '400px' }}>
            Full-stack developer, pet enthusiast, and part-time giant. Ready to
            develop, both programatically and otherwise.
          </p>
          <div>
            <DiGithubBadge size={40} />
          </div>
          <button
            className='navbutton'
            style={{ marginLeft: '100px', marginTop: '10px' }}
          >
            Resume
          </button>
        </div>
      </div>
      <p> hello</p>
    </div>
  );
}

export default About;
