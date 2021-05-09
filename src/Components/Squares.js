import React from "react";
import styled from "styled-components";

const SquareContainer = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  ${(props) => (props.left === true ? "left:0;" : "right: 0;")}
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
`;

const OuterSquareBlue = styled.div`
  background-color: #2a79a3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InnerSquareWhite = styled.div`
  background-color: white;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InnerSquareBlack = styled.div`
  background-color: Black;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Squares = (props) => {
  return (
    <SquareContainer left={props.left}>
      <OuterSquareBlue>
        <InnerSquareWhite>
          <InnerSquareBlack></InnerSquareBlack>
        </InnerSquareWhite>
      </OuterSquareBlue>
    </SquareContainer>
  );
};
