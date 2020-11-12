//react and components
import React, { Component } from 'react';
import styled from 'styled-components';
import './about.css';

//images
import github from '../images/github.png';
import mailbox from '../images/mailbox.png';
import linkedin from '../images/linkedin.png';

class about extends Component {
  componentDidMount() {
    document.title = 'About Me';
  }

  render() {
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

    return (
      <div>
        <div>
          <p className='centered'>What I'm About</p>
        </div>
        <Intro>
          Okay.<strong> *Deep Breath*</strong>
        </Intro>
        <br />
        <IntroBody>
          <strong>
            Born in 1782 under an evil star, I quickly began rallying the forces
            of darkness to my command.
          </strong>
          <br />
          <br />
          Wait... no. That's wrong.
          <br />
          <br />
          Born in 1991, I've spent the majority of my life in the contentential
          United States. I enjoy Martial arts, relaxing tea, and solving
          problems. I hike, play video games, and occasionally play a couple
          instruments.
          <br />
          I've tinkered with computers throughout my life. I built my first
          computer at eleven with my father. I tinkered with programming,
          building small programs in various languages to either play
          pranks(play "closing time" through the small shop's speakers I worked
          at during...well... closing time). In 2018 I decided I wanted to make
          a career of it and saved to sign up for Digital Crafts, a bootcamp I
          joined at the start of 2020.
        </IntroBody>

        <div className='socials'>
          <p>The Socials</p>
          <a href='mailto: j.bevers404@gmail.com'>
            <img className='PicList' src={mailbox} alt=''></img>
          </a>
          <a href='https://github.com/JoshuaBevers'>
            <img className='picList' src={github} alt=''></img>
          </a>

          <a href='https://www.linkedin.com/in/joshua-bevers-2673731a3/'>
            <img className='picList' src={linkedin} alt=''></img>
          </a>
        </div>
      </div>
    );
  }
}

export default about;
