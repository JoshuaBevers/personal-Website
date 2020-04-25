import React, { useEffect } from "react";
import TitlePic from "../images/renovation.webp";
import styled from "styled-components";

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
  top: 1vh;
  left:30vw;
  color: purple;
  font-family: fantasy;
  z-index: 1;
`;

function InProgress() {
  useEffect(() => {
    document.title = "In Progress";
  }, []);

  return (
    <div className="container">
      <TitlePicture src={TitlePic} alt="" />
      <TitleText>In Progress...</TitleText>
      <div>
        Hello! I'm still working this bit of the my website out while going
        through the class! So....
        <br />in progress is currently in progress. Ain't that about a bee.
        <br />
        Be prepared to see my long-term projects as soon as I start developing
        ones worth displaying!
      </div>
    </div>
  );
}

export default InProgress;
