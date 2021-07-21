import React, { useEffect } from 'react';
import data from '../data/projects';
import tutorial from '../data/tutorial';
import Projects from './components/projects';
import Tutorial from './components/tutorial';

import './complete.css';

function Complete() {
  useEffect(() => {
    document.title = 'Projects';
  });

  return (
    <div>
      {/* Projects */}
      <section className='section'>
        <div className='title'>
          <h2>
            <span>/</span>Projects
          </h2>
        </div>
        <Projects projectData={data} />
      </section>

      {/* tutorial works */}
      <section>
        <div className='title'>
          <h2>
            <span>/</span>Completed Tutorials
          </h2>
        </div>
        <Tutorial projectData={tutorial} />
      </section>
    </div>
  );
}

export default Complete;
