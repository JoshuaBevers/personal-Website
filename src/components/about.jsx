//react and components
import React, { Component } from "react";
import "./about.css";
//images
import tea from "../images/calmingtea.webp";
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
          <p className="centered">My personality and interests</p>
        </div>

        <div className="interests">
          <div className="">
            <img src={tea} alt=""></img>
          </div>
          <p>
            Okay. One paragraph. Let's do this.<strong> *Deep Breath*</strong>
            <br></br>
            Born in 1782 under an evil star, I quickly began rallying the forces
            of darkness to my command.
            <br></br>
            Wait... no. That's wrong.
            <br></br>
            Born in 1991, I've spent the majority of my life in the
            contentential United States. I enjoy Martial arts, relaxing tea, and
            solving problems. I hike, play video games, and occasionally play a
            couple instruments.
          </p>
        </div>
        {/* This next bar below will eventually be dropped down andreplaced with pictures. Once I actually take some of me >.< I hate pictures of me. */}
        <div className="socials">
          <p>The socials</p>
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
