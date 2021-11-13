import React, { useState } from 'react';
import styled from 'styled-components';

export const Container = styled.div`

`;
// export const Container = styled.div`

// `;

export const UserSignIn = () => {
  const [username, setUsername] = useState('')
  const [ password, setPassword ] = useState( '' )
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
		<Container>
			<input
				type='text'
				value={username}
				onChange={e => setUsername(e.target.value)}
				placeholder='username'
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
