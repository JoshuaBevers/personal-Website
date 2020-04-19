//react and components
import React, { Component } from "react";
import "./about.css";
import styled from "styled-components";

//images
import github from "../images/github.png";
import mailbox from "../images/mailbox.png";
import linkedin from "../images/linkedin.png";

class about extends Component {
  componentDidMount() {
    document.title = "About Me";
  }

  render() {
    return (
      <div>
        <div>
          <p className="centered">What I'm About</p>
        </div>
        <div className="interests">
          <p>
            Okay. One paragraph. Let's do this.<strong> *Deep Breath*</strong>
            <br />
            <strong>
              Born in 1782 under an evil star, I quickly began rallying the
              forces of darkness to my command.
            </strong>
            <br />
            Wait... no. That's wrong.
            <br />
            Born in 1991, I've spent the majority of my life in the
            contentential United States. I enjoy Martial arts, relaxing tea, and
            solving problems. I hike, play video games, and occasionally play a
            couple instruments.
            <br />
            I've tinkered with computers throughout my life. I built my first
            computer at eleven with my father. I tinkered with programming,
            building small programs in various languages to either play
            pranks(play "closing time" through the small shop's speakers I
            worked at during...well... closing time). In 2019 I decided I wanted
            to make a career of it and saved to sign up for Digital Crafts, a
            bootcamp I joined at the start of 2020.
          </p>
        </div>
        {/* This next bar below will eventually be dropped down and replaced with pictures. Once I actually take some of me >.< I hate pictures of me. */}
        <div className="socials">
          <p>The Socials</p>
          <a href="mailto: j.bevers404@gmail.com">
            <img className="PicList" src={mailbox} alt=""></img>
          </a>
          <a href="https://github.com/JoshuaBevers">
            <img className="picList" src={github} alt=""></img>
          </a>

          <a href="https://www.linkedin.com/in/joshua-bevers-2673731a3/">
            <img className="picList" src={linkedin} alt=""></img>
          </a>
        </div>
      </div>
    );
  }
}

export default about;
