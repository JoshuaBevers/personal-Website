import React from "react";
import styled from "styled-components";
import TitlePic from "../images/renovation.webp";

//doc import

const TitlePicture = styled.img`
  display: flex;
  padding-left: 20vw;
  margin-top: -10vh;
  width: 600px;
  position: relative;
  text-align: center;
`;

const TitleText = styled.p`
  position: absolute;
  display: flex;
  font-size: 50px;
  padding-left: 33vw;
  margin-top: -12vh;
  color: purple;
  z-index: 1;
  font-family: fantasy;
`;

function inProgress() {
  return (
    <div className="container">
      <TitlePicture src={TitlePic} alt="" />
      <TitleText>In Progress...</TitleText>
      <div>
        Hello! I'm still working this bit of the personal site out while going
        through the class!
        <br />
        Be prepared to see my long-term projects as soon as I start developing
        ones worth displaying!
      </div>
    </div>
  );
}

export default inProgress;
