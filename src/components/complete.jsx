import React, { useEffect } from 'react';
import styled from 'styled-components';

//img import
import Placeholder from '../images/BH.png';

const Title = styled.p`
  font-size: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const Completed = styled.div`
  background: rgb(62, 180, 137);
  height: 100vh;
`;

const DisplayBlack = styled.p`
  display: flex;
  margin-bottom: -15px;
  font-size: 25px;
  background-color: black;
  color: white;

  img {
    width: 250px;
  }
`;

const DisplayGrey = styled.p`
  display: flex;
  font-size: 25px;
  background-color: grey;
  color: white;

  img {
    position: relative;
    width: 250px;
  }
`;

function Complete() {
  useEffect(() => {
    document.title = 'Complete';
  });

  //I really need to figure out how I want this displayed. I know I want this on the website, I just don't know
  //How it would be best to display it graphically.
  return (
    <Completed>
      <Title>Completed projects</Title>

      <DisplayBlack>
        <img src={Placeholder} alt=''></img>
        Hello!
      </DisplayBlack>
      <DisplayGrey>
        Hello!<img src={Placeholder} alt=''></img>
      </DisplayGrey>
    </Completed>
  );
}

export default Complete;
