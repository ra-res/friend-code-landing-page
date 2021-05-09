import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: #c0c0c0;
  display: flex;
  justify-content: space-between;
  padding: 2vh;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 30vh;
  }
`;

export const Footer = () => {
  return <FooterContainer></FooterContainer>;
};
