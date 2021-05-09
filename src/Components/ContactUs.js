import React from "react";
import styled from "styled-components";
import { Squares } from "./Squares";

const ContactFormContainer = styled.div`
    margin-top: 15%:
    width:100%;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5%;
    overflow:hidden;
    position: relative;
`;

const TitleWrapper = styled.div`
  margin-top: 2%;
  border-bottom: 1px solid #2a79a3;
  width: 100%;
`;

const Title = styled.h1`
  color: #2a79a3;
  font-size: 4vh;
`;

const Description = styled.p`
  color: black;
  margin-top: 2%;
`;

const FormMessage = styled.p`
  color: grey;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 80%;
  height: 30px;
  border: 1px solid #2a79a3;
  background-color: #eff4ff;
  margin-top: 5%;
  color: #2a79a3;
`;
const TextArea = styled.textarea`
  width: 80%;
  height: 100px;
  background-color: #eff4ff;
  border: 1px solid #2a79a3;
  color: #2a79a3;
  margin-top: 5%;
`;

const SendButton = styled.div`
  height: 30px;
  width: 80px;
  color: white;
  margin-top: 2%;
  background-color: #2a79a3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactUs = () => {
  return (
    <ContactFormContainer>
      <TitleWrapper>
        <Title>CONTACT US</Title>
      </TitleWrapper>
      <Description>
        Would you like to add a game? Do you have any suggestions for us to
        improve?
      </Description>
      <FormMessage>Please fill the form below:</FormMessage>
      <Form>
        <Input placeholder='Full name'></Input>
        <Input placeholder='Email'></Input>
        <TextArea placeholder='Message'></TextArea>
      </Form>
      <SendButton>SEND</SendButton>
    </ContactFormContainer>
  );
};
