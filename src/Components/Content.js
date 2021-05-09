import React from "react";
import styled from "styled-components";

const VerticalAdvertisement = styled.div`
  background-color: #b8d8e7;
  width: 80px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 100px;
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5vh;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 0vh;
  }
`;

const MainContentWrapper = styled.div`
  background-color: white;
  height: 800px;
  min-width: 800px;
  max-width: 1000px;
`;

export const Content = () => {
  return (
    <ContentContainer>
      <VerticalAdvertisement>ADD</VerticalAdvertisement>
      <MainContentWrapper></MainContentWrapper>
      <VerticalAdvertisement>ADD</VerticalAdvertisement>
    </ContentContainer>
  );
};
