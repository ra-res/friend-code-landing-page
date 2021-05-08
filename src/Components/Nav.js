import React, { useState } from "react";
import styled from "styled-components";
import MagnifierIMG from "../Assets/Images/magnifier.png";

const NavbarContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: #c0c0c0;
  align-items: center;
  display: flex;
  padding: 5vh;
  justify-content: space-between;
  position: relative;
`;

const MainTitle = styled.h1`
  font-size: 4vh;
  color: black;
  display: flex;
  justify-content: center;
  width: 60%;
`;

const MenuText = styled.h1`
  width: 20%;
  font-size: 3vh;
  color: black;
`;

const SearchBar = styled.div`
  height: 5vh;
  font-size: 2vh;
  width: 20%;
  padding: 1vh;
  border-radius: 25px;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
`;

const MagnifierIcon = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  background-color: white;
  height: 100px;
  width: 200px;
  display: ${(props) => (props.isOpen === true ? "flex" : "none")};
  margin-left: 5vh;
  position: absolute;
  ${(props) => (props.isOpen === true ? "flex-direction: column" : "")};
`;

const DropdownLink = styled.a`
  color: black;
  text-decoration: none;
`;

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <Dropdown isOpen={isOpen}>
        <DropdownLink href='#'> Add new game</DropdownLink>
        <DropdownLink href='#'> Contact us </DropdownLink>
      </Dropdown>
    </>
  );
};
