import React, { useEffect } from 'react';
import styled from 'styled-components';

//img import
import Placeholder from '../images/BH.png';

const Title = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 60px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const ProjectTitle = styled.p`
  position: absolute;
  font-size: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  left: 45%;
  margin-top: 10px;
`;

const ProjectText = styled.p`
  font-size: 20px;
  margin-top: 50px;
`;

const Completed = styled.div`
  background: rgb(62, 180, 137);
  height: 100vh;
`;

const DisplayBlack = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 25px;
  background-color: black;
  color: white;

  img {
    width: 250px;
  }
`;

const DisplayGrey = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 25px;
  background-color: grey;
  color: white;
  height: 187px;

  img {
    position: absolute;
    width: 250px;
    right: 0;
  }
`;

function Complete() {
  useEffect(() => {
    document.title = 'Complete';
  });

  return (
    <Completed>
      <Title>Completed projects</Title>
      <DisplayBlack>
        <img src={Placeholder} alt=''></img>
        <ProjectTitle>Project Name</ProjectTitle>
        <ProjectText>This is where the text description goes!</ProjectText>
      </DisplayBlack>
      <DisplayGrey>
        <ProjectTitle>Project Name</ProjectTitle>
        <ProjectText>This is where the text description goes!</ProjectText>
        <img src={Placeholder} alt=''></img>
      </DisplayGrey>
      <DisplayBlack>
        <img src={Placeholder} alt=''></img>
        <ProjectTitle>Project Name</ProjectTitle>
        <ProjectText>This is where the text description goes!</ProjectText>
      </DisplayBlack>
    </Completed>
  );
}

export default Complete;
