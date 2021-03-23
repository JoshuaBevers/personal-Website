import React, { useEffect } from 'react';
import styled from 'styled-components';

//images
import github from '../images/github.png';
import mailbox from '../images/mailbox.png';
import linkedin from '../images/linkedin.png';

const Title = styled.p`
  font-size: 3em;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    font-size: 2em;
  }
`;

const Intro = styled.p`
  font-size: 25px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const IntroBody = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  align-content: center;
  margin-left: 5vw;
  margin-right: 5vw;

  strong {
    font-size: 24px;
    font-family: Tahoma;
  }
`;

const Frame = styled.div`
  background-color: lightgray;
`;

const Image = styled.img`
  margin-top: 15px;
  width: 100px;
  margin-left: 20px;
  margin-right: 10px;
  @media only screen and (max-width: 600px) {
    width: 80px;
  }
`;

function About() {
  useEffect(() => {
    document.title = 'About Me';
  }, []);

  return (
    <Frame>
      <Title>A Small Life</Title>
      <IntroBody>
        How does one describe themselves? Sum up their entire being, give any
        account of themselves, in just a handful of sentences.
        <br />
        <br />
        I improve. I seek to improve through whatever knowledge and experience
        can be scraped off this hotpan we call life. I've dabbled on the piano.
        I've practiced martial arts, managed games, and run small bussinesses.
        I've swam with the manatees, gone to colleges - left colleges - breezed
        across the ocean; and now I'm looking to contribute to the internet in
        whatever small way I can.
        <br />
        <br />
        So, thanks for stopping by. Take a sip of tea. Check out my projects, if
        you haven't already.
        <br />
        <br />
        And most importantly, never forget to throw to main.
      </IntroBody>
      <div className='socials'>
        <p>The Socials</p>
        <a href='mailto: j.bevers404@gmail.com'>
          <Image src={mailbox} alt=''></Image>
        </a>
        <a href='https://github.com/JoshuaBevers'>
          <Image src={github} alt=''></Image>
        </a>

        <a href='https://www.linkedin.com/in/joshua-bevers-2673731a3/'>
          <Image src={linkedin} alt=''></Image>
        </a>
      </div>
    </Frame>
  );
}

export default About;
