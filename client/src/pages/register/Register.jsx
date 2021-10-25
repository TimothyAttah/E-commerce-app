import React from 'react';
import styled from 'styled-components';
import { images } from '../../components/images';
import { mobile } from '../../responsive';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url(${images.Photo3}) center no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
	width: 50%;
	padding: 20px;
	background-color: white;
	${mobile({
    width: '75%',
  })}
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid gray;
`;
const Agreement = styled.span`
  font-size: 0.7em;
  margin: 20px 0;
`;
const Button = styled.button`
  text-transform: uppercase;
  width: 40%;
  padding: 15px 20px;
  background-color: teal;
  color: white;
`;

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
