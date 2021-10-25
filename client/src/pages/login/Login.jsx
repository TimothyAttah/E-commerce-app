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
		url(${images.Photo1}) center no-repeat;
	background-size: cover;

	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	${mobile({
    width: '75%',
  })}
`;
const Title = styled.h1`
	text-transform: uppercase;
	font-size: 1.5rem;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
	border: 1px solid gray;
`;
const Button = styled.button`
	text-transform: uppercase;
	width: 40%;
	padding: 10px 20px;
	background-color: teal;
	color: white;
  margin-bottom: 10px;
`;

const LinkContainer = styled.a`
	text-transform: uppercase;
  margin: 5px 0;
  font-size: 0.6rem;
  text-decoration: underline;
  cursor: pointer;
  /* color: black; */
  font-weight: lighter;
`;

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <LinkContainer>
            Do not remember the password?
          </LinkContainer>
          <LinkContainer>
            Create a new account
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};
