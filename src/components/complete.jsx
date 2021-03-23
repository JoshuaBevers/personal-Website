import React, { useEffect } from 'react';
import styled from 'styled-components';

//img import
import Placeholder from '../images/BH.png';
import Drinkcast from '../images/drinkcast.png';
import Pandemic from '../images/PandemicGA.png';
import Achieveland from '../images/Achieveland.png';

//techStack IMGS

import node from '../images/node.png';
import react from '../images/react.png';
import html from '../images/html.jpeg';
import AWS from '../images/AWS.png';
import MongoDB from '../images/mongo.jpg';
import drl from '../images/7drl.png';
import typescript from '../images/typescript.jpeg';

const Title = styled.p`
  margin-top: 0px;
  font-size: 60px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: orange;
  display: flex;
  justify-content: center;
`;

const Completed = styled.div`
  background: black;
`;

const DisplayBlack = styled.div`
  font-size: 25px;
  background-color: grey;
  color: orange;
`;

const DisplayWhite = styled.div`
  font-size: 25px;
  background-color: white;
  color: orange;
`;

const IMGAndTitle = styled.div`
  display: flex;
`;

const ProjectTitle = styled.p`
  font-size: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: orange;
  margin-bottom: 0px;
  justify-content: center;
  margin-left: 25vw;
  @media (max-width: 768px) {
    margin-left: 10vw;
  }
`;

const TitleAndTechStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectText = styled.p`
  font-size: 21px;
  margin-right: 25px;
  flex-direction: row;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

const IMG = styled.img`
  float: left;
  width: 287px;
  height: 187px;

  @media (max-width: 768px) {
    width: 160px;
    min-height: 160px;
  }
`;

const TechStack = styled.div`
  flex-direction: row;
  margin-left: 4vw;
`;

const LittleIMGs = styled.img`
  margin-top: 2vh;
  height: 10vh;
  width: 8vw;
  flex-direction: row;
  @media (max-width: 768px) {
    height: 10vh;
    width: 20vw;
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
        <IMGAndTitle>
          <IMG src={Drinkcast} alt={Placeholder}></IMG>
          <TitleAndTechStack>
            <ProjectTitle>DrinkCast</ProjectTitle>
            <TechStack>
              <LittleIMGs src={react} />
              <LittleIMGs src={node} />
            </TechStack>
          </TitleAndTechStack>
        </IMGAndTitle>

        <ProjectText>
          A video confrencing website that allows users to create/join a room
          without having to log in to meet up with friends in a face-to-face
          virtual enviroment to play a few quick games and drink. BYOB,
          unfortunately.
          <br />
          <br />
          <a href='https://github.com/JoshuaBevers/drinkcast-client'>
            See the Matrix
          </a>
        </ProjectText>
      </DisplayBlack>

      <DisplayWhite>
        <IMGAndTitle>
          <IMG src={Pandemic} alt={Placeholder}></IMG>
          <TitleAndTechStack>
            <ProjectTitle>Pandemic Georgia</ProjectTitle>
            <TechStack>
              <LittleIMGs src={html} />
            </TechStack>
          </TitleAndTechStack>
        </IMGAndTitle>
        <ProjectText>
          This game was made during a time where Covid wasn't....what it is now.
          Modeling on a basic form of the boardgame 'pandemic', this deals
          specifically with the containment and spread in georgia.
          <br />
          <br />
          <a href='https://github.com/JoshuaBevers/pandemic-georgia'>
            Decode the Epidemic
          </a>
        </ProjectText>
      </DisplayWhite>

      <DisplayBlack>
        <IMGAndTitle>
          <IMG src={Achieveland} alt={Placeholder}></IMG>
          <TitleAndTechStack>
            <ProjectTitle>Achieveland</ProjectTitle>
            <TechStack>
              <LittleIMGs src={react} />
              {/* Needs new Mongo images */}
              <LittleIMGs src={MongoDB} />
              <LittleIMGs src={AWS} />
            </TechStack>
          </TitleAndTechStack>
        </IMGAndTitle>

        <ProjectText>
          A video confrencing website that allows users to create/join a room
          without having to log in to meet up with friends in a face-to-face
          virtual enviroment to play a few quick games and drink. BYOB,
          unfortunately.
          <br />
          <br />
          <a href='https://github.com/JoshuaBevers/drinkcast-client'>
            See the Matrix
          </a>
        </ProjectText>
      </DisplayBlack>

      <DisplayWhite>
        <IMGAndTitle>
          <IMG src={drl} alt={Placeholder}></IMG>
          <TitleAndTechStack>
            <ProjectTitle>7drl -Mal </ProjectTitle>
            <TechStack>
              <LittleIMGs src={typescript} />
            </TechStack>
          </TitleAndTechStack>
        </IMGAndTitle>
        <ProjectText>
          This project was made for the 2021 7 Day Roguelike Contest, using the
          Malwoden JS/TS roguelike library created by myself and a really good
          friend. The game focuses on a set of minimalistic roguelike mechanics,
          with a good degree of ascii polish.
          <br />
          <a href='https://github.com/Aedalus/malwoden-7drl'>See the code!</a>
          <br />
          <br />
          <a href='https://itch.io/jam/7drl-challenge-2021/rate/955996'>
            Click here to play it live!
          </a>
          <br />
          <br />
          <a href='https://github.com/Aedalus/malwoden'>
            The framework I've contributed to that made this possible!
          </a>
        </ProjectText>
      </DisplayWhite>

      {/* end */}
    </Completed>
  );
}

export default Complete;
