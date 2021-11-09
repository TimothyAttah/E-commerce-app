import React from 'react';
import {
	Container,
	Wrapper,
	Title,
	Form,
	Input,
	Button,
	LinkContainer
} from './LoginStyles';

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
