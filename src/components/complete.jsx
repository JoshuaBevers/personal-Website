import React, { useEffect } from 'react';
import styled from 'styled-components';

//img import
import Placeholder from '../images/BH.png';
import Drinkcast from '../images/drinkcast.png';
import Pandemic from '../images/PandemicGA.png';

const Title = styled.p`
  margin-top: 0px;
  font-size: 60px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: orange;
`;

const ProjectTitle = styled.p`
  display: flex;
  font-size: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-top: 10px;
  color: orange;
  margin-bottom: 0px;
  justify-content: center;
  margin-left: 250px;

  @media (max-width: 768px) {
    margin-left: 140px;
  }
`;

const ProjectText = styled.p`
  font-size: 21px;
  margin-right: 25px;
  flex-direction: row;

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

const Completed = styled.div`
  background: black;
  height: 100vh;
`;

const DisplayBlack = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  font-size: 25px;
  background-color: grey;
  color: orange;

  @media (max-width: 768px) {
    padding: 0px;
    height: 60vh;
  }
`;

const DisplayWhite = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  font-size: 25px;
  background-color: white;
  color: orange;

  @media (max-width: 768px) {
    padding: 0px;
    height: 60vh;
  }
`;

const IMG = styled.img`
  margin-top: -66px;
  float: left;
  width: 287px;
  height: 187px;

  @media (max-width: 768px) {
    margin-top: -120px;
    width: 160px;
    height: 140px;
  }
`;

function Complete() {
  useEffect(() => {
    document.title = 'Complete';
  });

  return (
    <Completed>
      <Title>Completed Projects</Title>
      <DisplayBlack>
        <ProjectTitle>DrinkCast</ProjectTitle>
        <ProjectText>
          <IMG src={Drinkcast} alt={Placeholder}></IMG>
          A video confrencing website that allows users to create/join a room
          without having to log in to meet up with friends in a face-to-face
          virtual enviroment to play a few quick games and drink. BYOB,
          unfortunately.
          <br />
          <a href='https://github.com/JoshuaBevers/drinkcast-client'>
            See the Matrix
          </a>
        </ProjectText>
      </DisplayBlack>

      <DisplayWhite>
        <ProjectTitle>Pandemic Georgia</ProjectTitle>
        <ProjectText>
          <IMG src={Pandemic} alt={Placeholder}></IMG>
          This game was made during a time where Covid wasn't....what it is now.
          Modeling on a basic form of the boardgame 'pandemic', this deals
          specifically with the containment and spread in georgia.
          <br />
          <a href='https://github.com/JoshuaBevers/pandemic-georgia'>
            Decode the Epidemic
          </a>
        </ProjectText>
      </DisplayWhite>
    </Completed>
  );
}

export default Complete;
