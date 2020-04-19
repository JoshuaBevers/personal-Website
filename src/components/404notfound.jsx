import React from "react";
import styled from "styled-components";

//doc import

const PSorry = styled.p`
  font-size: 70px;
  color: orange;
`;

// const Picture = styled.img`
//   background: url("../images/BH.png") no-repeat;
// `;

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
