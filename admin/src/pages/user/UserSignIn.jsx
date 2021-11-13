import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCall';

export const Container = styled.div`
	flex: 4;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  max-width: 500px;
  width: 100%;
  height: 100vh;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	input {
		display: block;
		margin: 15px;
		border-bottom: 1px solid var(--gray);
		padding: 10px;
    width: 100%;
	}
	button {
		padding: 10px;
		width: 200px;
		background-color: var(--darkBlue);
		color: var(--text-white);
    border-radius: 10px;
    margin-top: 20px;
	}
`;
// export const Container = styled.div`

// `;

export const UserSignIn = () => {
  const [email, setEmail] = useState('')
  const [ password, setPassword ] = useState( '' );
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, {email, password})
  }
  return (
		<Container>
			<input
				type='text'
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='email'
			/>
			<input
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder='password'
			/>
			<button type='submit' onClick={handleSubmit}>SignIn</button>
		</Container>
	);
}
