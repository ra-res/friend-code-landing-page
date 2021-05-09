import React from "react";
import ControllerIMG from "../Assets/Images/controller.png";
import styled from "styled-components";
import { Content } from "./Content";

const HorizonalAdvertisement = styled.div`
  background-color: #b8d8e7;
  min-width: 800px;
  max-width: 1000px;
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: 100px;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  > * {
    margin-top: 5vh;
  }
`;
const HeaderMainText = styled.h1`
  color: white;
  font-size: 4vh;
  margin-top: 10vh;
`;

const DiscoverButton = styled.h1`
  color: black;
  padding: 2vh;
  background-color: white;
  font-size: 2vh;
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 1000px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    min-height: 400px;
    max-height: 100%;
  }
`;

const BackgroundImage = styled.img`
  background-color: black;
  position: absolute;
  width: 100%;
  min-height: 1000px;
  max-height: 1900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: -1;
  @media (max-width: 768px) {
    min-height: 400px;
    max-height: 1000px;
    filter: brightness(70%);
  }

  ${(props) =>
    props.rotated === true
      ? " -moz-transform: scaleX(-1); -o-transform: scaleX(-1); -webkit-transform: scaleX(-1); transform: scaleX(-1); filter: FlipH; -ms-filter: FlipH"
      : ""};
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <BackgroundImage rotated={true} src={ControllerIMG} />
      <ContentWrapper>
        <HeaderMainText>Make new friends in your favorite game </HeaderMainText>
        <DiscoverButton> DISCOVER </DiscoverButton>
        <HorizonalAdvertisement> ADD </HorizonalAdvertisement>
      </ContentWrapper>
      <Content></Content>
    </HeaderContainer>
  );
};
