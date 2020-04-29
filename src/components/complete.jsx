import React, { useEffect } from 'react';
import styled from 'styled-components';

//img import
import Placeholder from '../images/BH.png';
import Drinkcast from "../images/drinkcast.png"

const Title = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 60px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: orange;
`;

const ProjectTitle = styled.p`
  position: absolute;
  font-size: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  left: 45%;
  margin-top: 10px;
  color: orange;
`;

const ProjectText = styled.p`
  font-size: 21px;
  margin-top: 50px;
  margin-left: 25px;
  margin-right: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
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
  font-size: 25px;
  background-color: Grey;
  color: orange;

  img {
    width: 250px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    img {
      width: 150px;
    }
  }
`;

const DisplayWhite = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 25px;
  background-color: white;
  color: orange;
  height: 187px;

  img {
    width: 250px;
    right: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;

    img {
      width: 150px;
      left: 0px;
    }
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
        <img src={Drinkcast} alt=''></img>
        <ProjectTitle>DrinkCast</ProjectTitle>
        <ProjectText>
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
        <img src={Placeholder} alt=''></img>
        <ProjectTitle>DC solo-react project</ProjectTitle>
        <ProjectText>
          A quick front-end project that uses context. I built a small
          motivational, quest-based game. I feel that there can be more to be
          mined from this project later, but is closed for now while I finish
          this course.
          <br />
          <a href='https://github.com/JoshuaBevers/React-Solo-Frontend'>
            The secret is in the sause.
          </a>
        </ProjectText>
      </DisplayWhite>
      <DisplayBlack>
        <img src={Placeholder} alt=''></img>
        <ProjectTitle>Pandemic Georgia</ProjectTitle>
        <ProjectText>
          This game was made during a time where Covid wasn't....what it is now.
          Modeling on a basic form of the boardgame 'pandemic', this deals
          specifically with the containment and spread in georgia.
          <br />
          <a href='https://github.com/JoshuaBevers/pandemic-georgia'>
            Decode the Epidemic
          </a>
        </ProjectText>
      </DisplayBlack>
      <DisplayWhite>
        <img src={Placeholder} alt=''></img>
        <ProjectTitle>...AND THIS SITE!</ProjectTitle>
        <ProjectText>
          This will be on ongoing project as I hone my craft to improve this
          website and keep it updated with my projects!
          <br />
          <a href='https://github.com/JoshuaBevers/JoshuaBevers.github.io'>
            It is me!
          </a>
        </ProjectText>
      </DisplayWhite>
    </Completed>
  );
}

export default Complete;
