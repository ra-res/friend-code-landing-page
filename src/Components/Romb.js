import React from "react";
import styled from "styled-components";
import PokemonImage from "../Assets/Images/pokemon.png";
import PalmTreeImage from "../Assets/Images/palmtree.jpeg";
import FlagsImage from "../Assets/Images/raceflag.svg";
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SquareContainer = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
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

const Image = styled.img`
  background-color: white;
  width: 75px;
  height: 75px;
  top: 0;
  z-index: 5;
`;

export const Romb = (props) => {
  var path;
  if (props.which === "pokemon") {
    path = PokemonImage;
  } else if (props.which === "flags") {
    path = FlagsImage;
  } else if (props.which === "palmtree") {
    path = PalmTreeImage;
  }
  return (
    <Container>
      <Image src={path}></Image>
      <SquareContainer>
        <OuterSquareBlue>
          <InnerSquareWhite>
            <InnerSquareBlack></InnerSquareBlack>
          </InnerSquareWhite>
        </OuterSquareBlue>
      </SquareContainer>
    </Container>
  );
};
