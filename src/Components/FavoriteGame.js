import React from "react";
import styled from "styled-components";
import { Romb } from "./Romb";

const FavoriteGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 5%;
  @media (max-width: 768px) {
    margin-top: 10%;
  }
`;

const GameTitle = styled.h1`
  color: #2a79a3;
  font-size: 2vh;
  margin-top: 25%;
`;

const GameDescription = styled.p`
  font-size: 1.2vh;
  color: grey;
`;

export const FavoriteGame = (props) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nulla nisi vel repellendus odio delectus rem harum voluptatibus perferendis explicabo, similique blanditiis quas facilis accusantium incidunt architecto quidem assumenda repudiandae.".substring(
    0,
    150
  );

  return (
    <FavoriteGameContainer>
      <Romb which={props.which}></Romb>
      <GameTitle> {props.title}</GameTitle>
      <GameDescription>{lorem}...</GameDescription>
    </FavoriteGameContainer>
  );
};
