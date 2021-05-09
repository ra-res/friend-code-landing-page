import React, { useState } from "react";
import styled from "styled-components";
import MagnifierIMG from "../Assets/Images/magnifier.png";
import useWindowSize from "../Utils/WindowSize";
import { motion } from "framer-motion";

const NavbarContainer = styled.div`
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

const MainTitle = styled.h1`
  font-size: 4vh;
  color: black;
  @media (max-width: 768px) {
    left: 0;
  }
`;

const MenuText = styled.h1`
  font-size: 3vh;
  color: black;
`;

const SearchBar = styled.div`
  height: 5vh;
  font-size: 2vh;
  width: 20vh;
  padding: 1vh;
  border-radius: 25px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    right: 0;
    width: 100%;
  }
`;

const MagnifierIcon = styled.img`
  height: 100%;
`;

const Dropdown = styled(motion.div)`
  background-color: white;
  height: 130px;
  width: 200px;
  display: ${(props) => (props.isOpen === true ? "flex" : "none")};
  margin-left: 5vh;
  position: absolute;
  ${(props) => (props.isOpen === true ? "flex-direction: column" : "")};
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const DropdownTriangle = styled.div`
  height: 50px;
  width: 50px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  background-color: white;
  position: absolute;
  z-index: 2;
  border: 2px solid white;
  margin-left: 5%;
  @media (max-width: 768px) {
    border: 2px solid white;
    margin-left: 45%;
  }
`;

const DropdownLink = styled.a`
  color: black;
  text-decoration: none;
  transition: ease-in;
  z-index: 2;
  font-size: 2vh;
  &:hover {
    text-decoration: underline;
  }
`;

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const size = useWindowSize();
  return (
    <>
      <NavbarContainer>
        <MenuText
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          Menu
        </MenuText>
        <MainTitle>Friend Code</MainTitle>
        <SearchBar>
          Search... <MagnifierIcon src={`${MagnifierIMG}`} />
        </SearchBar>
      </NavbarContainer>

      <Dropdown
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        isOpen={isOpen}>
        <DropdownTriangle />
        <DropdownLink href='#'> Add new game</DropdownLink>
        <DropdownLink href='#'> Contact us </DropdownLink>
      </Dropdown>
    </>
  );
};
