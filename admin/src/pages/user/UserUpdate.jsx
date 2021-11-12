import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
export const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserTitle = styled.h1`

`;
export const UserButton = styled.button`
  width: 80px;
  padding: 5px;
  border-radius: 5px;
  background-color: teal;
  color: var(--text-white);
  font-size: 1rem;
`;
export const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const UserShowContainer = styled.div`
	flex: 1;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const UserUpdateContainer = styled.div`
	flex: 2;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px; 
`;
// export const UserContainer = styled.div`

// `;

export const UserUpdate = () => {
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <UserButton>Create</UserButton>
      </UserTitleContainer>
      <UserContainer>
        <UserShowContainer>

        </UserShowContainer>
        <UserUpdateContainer>

        </UserUpdateContainer>
      </UserContainer>
    </Container>
  )
}
