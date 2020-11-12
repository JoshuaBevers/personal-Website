import React, { useEffect } from 'react';
import styled from 'styled-components';

//img import
import Placeholder from '../images/BH.png';
import DnMe from '../images/DnMe.png';
import Achieveland from '../images/Achieveland.png';

const Title = styled.p`
  display: flex;
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 60px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: orange;
  justify-content: center;
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
  width: calc(100vw - (100vw - 100%));
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

const DisplayGrey = styled.div`
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

function InProgress() {
  useEffect(() => {
    document.title = 'In Progress';
  }, []);

  return (
    <Completed>
      <Title>In Progress Projects</Title>
      <DisplayBlack>
        <ProjectTitle>RPG Sampler</ProjectTitle>
        <ProjectText>
          <IMG src={Placeholder} alt=''></IMG>
          A learning typescript RPG skeleton that I'm putting together.
          Temperarily on hold.
          <br />
          <a href='https://github.com/JoshuaBevers/Game'>See the Matrix</a>
        </ProjectText>
      </DisplayBlack>
      <DisplayGrey>
        <ProjectTitle>DC solo-react project</ProjectTitle>
        <ProjectText>
          <IMG src={DnMe} alt={Placeholder}></IMG>
          A quick front-end project that uses context. I built a small
          motivational, quest-based game. I feel that there can be
          <br />
          more to be mined from this project later, but is closed for now while
          I finish this course.
          <br />
          <a href='https://github.com/JoshuaBevers/React-Solo-Frontend'>
            The secret is in the sause.
          </a>
        </ProjectText>
      </DisplayGrey>
      <DisplayBlack>
        <ProjectTitle>RPG Sampler</ProjectTitle>
        <ProjectText>
          <IMG src={Achieveland} alt='My baby project picture has left.'></IMG>
          My long-term pet project. Allows people to securely log-in, search and
          claim achievements for board games they've played!
          <br />
          <a href='achieveland.net'>Visit the site! Join the crew!</a>
        </ProjectText>
      </DisplayBlack>
    </Completed>
  );
}

export default InProgress;
