import React, { useEffect } from 'react';

//doc import

function Resume() {
  useEffect(() => {
    document.title = 'Resume';
  }, []);

  return (
    <div className='interests'>
      <div>This is my resume page! I have it coming! Be prepared!</div>
    </div>
  );
}

export default Resume;
