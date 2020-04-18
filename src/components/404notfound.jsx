import React from "react";
import styled from "styled-components";
import "./404notfound.css";

//doc import

const PSorry = styled.p`
  font-size: 70px;
  color: orange;
`;

function notFound() {
  return (
    <div className="interests">
      <PSorry>
        I'm sorry.
        <br /> It appears the page you were looking for was eaten.
      </PSorry>
    </div>
  );
}

export default notFound;
