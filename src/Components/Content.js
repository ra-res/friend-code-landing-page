import React from "react";
import styled from "styled-components";
import { Romb } from "./Romb";
import PokemonImage from "../Assets/Images/pokemon.png";
import { FavoriteGame } from "./FavoriteGame";
import { Header } from "./Header";
import { MainGames } from "./MainGames";
import { ContactUs } from "./ContactUs";
import { Squares } from "./Squares";

const VerticalAdvertisement = styled.div`
  background-color: #b8d8e7;
  width: 150px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    min-width: 800px;
    max-width: 1000px;
    height: 100px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5vh;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 0vh;
  }
`;

const ContentWrapper = styled.div`
  background-color: white;
  height: max(800px, 100%);
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  margin-top: 2%;
  border-bottom: 1px solid #2a79a3;
  width: 60%;
`;

const Title = styled.h1`
  color: #2a79a3;
  font-size: 4vh;
`;

const FavoriteGamesContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeaderDescription = styled.p`
  font-size: 2vh;
  color: black;
`;

const SquareContainer = styled.div`
  display: block;
`;

export const Content = () => {
  return (
    <Container>
      <VerticalAdvertisement>ADD</VerticalAdvertisement>
      <ContentWrapper>
        <TitleWrapper>
          <Title> OUR BEST GAMES </Title>
        </TitleWrapper>
        <FavoriteGamesContainer>
          <FavoriteGame
            which={"flags"}
            title={"MARIO KART TOUR"}></FavoriteGame>
          <FavoriteGame which={"pokemon"} title={"POKEMON GO"}></FavoriteGame>
          <FavoriteGame
            which={"palmtree"}
            title={"ANIMAL CROSSING"}></FavoriteGame>
        </FavoriteGamesContainer>
        <Title> Do you want to share your friend codes?</Title>
        <HeaderDescription>
          This website has been is created to find active friend codes. Don't
          wait any longer! Find friends in the games you like and share your own
          friend code.
        </HeaderDescription>
        <MainGames></MainGames>
        <ContactUs></ContactUs>
      </ContentWrapper>
      <VerticalAdvertisement>ADD</VerticalAdvertisement>
    </Container>
  );
};
