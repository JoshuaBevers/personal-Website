import React, { useEffect } from 'react';
import styled from 'styled-components';

//img import
import Placeholder from '../images/BH.png';
import DnMe from '../images/DnMe.png';
import Achieveland from '../images/Achieveland.png';

function InProgress() {
  useEffect(() => {
    document.title = 'In Progress';
  }, []);

  return (
    <>
      <o>sliders</o>
      <o>sliders</o>
      <o>sliders</o>
      <o>sliders</o>
      <o>sliders</o>
      <o>sliders</o>
      <o>sliders</o>
      <o>sliders</o>
      <o>sliders</o>
    </>
  );
}

export default InProgress;
