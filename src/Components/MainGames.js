import React from "react";
import styled from "styled-components";
import data from "../Assets/Data/GameData";

const Container = styled.div`
  margin-top: 5%;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 50% 50%;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: #2a79a3;
  font-size: 1.5vh;
`;
const Description = styled.p`
  color: black;
  font-size: 1vh;
  padding: 2%;
`;
const Image = styled.div`
  background-color: grey;
  color: black;
  min-width: 150px;
  max-wdith: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainGames = () => {
  return (
    <Container>
      {data.map((elem, index) => {
        return (
          <InnerContainer index={index}>
            <Image>IMAGE</Image>
            <TextContainer>
              <Title> {elem.name}</Title>
              <Description>{elem.text.substring(0, 200)}...</Description>
            </TextContainer>
          </InnerContainer>
        );
      })}
    </Container>
  );
};
