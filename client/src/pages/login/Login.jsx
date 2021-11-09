import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCall';
import {
	Container,
	Wrapper,
	Title,
	Form,
	Input,
  Button,
  Error,
	LinkContainer
} from './LoginStyles';

export const Login = () => {
  const [email, setEmail] = useState('')
  const [ password, setPassword ] = useState( '' )
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector(state => state.user)
  const handleSubmit = ( e ) => {
    e.preventDefault();
    login( dispatch, { email, password } );
  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="email" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
          <Input type="password" placeholder="password" name='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
          <Button type="submit" onClick={ handleSubmit } disabled={ isFetching }>Login</Button>
          { error && <Error>Something went wrong...</Error>}
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
