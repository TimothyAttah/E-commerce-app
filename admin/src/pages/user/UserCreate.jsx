import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
  flex: 4;
`;
export const NewUserTitle = styled.h1`
  
`;
export const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const NewUserFormItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  label{
    margin-bottom: 10px;
    font-size: 0.8rem;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  input{
    height: 30px;
    padding: 20px 10px;
    border: 1px solid var(--gray);
    border-radius: 5px;
  }
  select{
    height: 40px;
    border-radius: 5px;
  }
`;
export const NewUserGender = styled.div`
  input{
    margin-top: 15px;
    height: 15px;
    padding: 0;
  }
  label{
    margin: 10px;
    font-size: 1.1rem;
    color: var(--text-gray);
    font-weight: normal;
  }
`;
export const NewUserButton = styled.button`
  width: 200px;
  background-color: var(--darkBlue);
  color: var(--text-white);
  padding: 7px 10px;
  border-radius: 10px;
  font-weight: 600;
  margin-top: 30px;
`;


export const UserCreate = () => {
  return (
    <Container>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserFormItem>
          <label>Username</label>
          <input type="text" placeholder='john' />
        </NewUserFormItem>
        <NewUserFormItem>
          <label>Full Name</label>
          <input type="text" placeholder='John Smith' />
        </NewUserFormItem>
        <NewUserFormItem>
          <label>Email</label>
          <input type="email" placeholder='john@gmail.com' />
        </NewUserFormItem>
        <NewUserFormItem>
          <label>Password</label>
          <input type="password" placeholder='password' />
        </NewUserFormItem>
        <NewUserFormItem>
          <label>Phone</label>
          <input type="text" placeholder='+123 456 789 0' />
        </NewUserFormItem>
        <NewUserFormItem>
          <label>Address</label>
          <input type="text" placeholder='New York | USA' />
        </NewUserFormItem>
        <NewUserFormItem>
          <label>Gender</label>
          <NewUserGender>
          <input type="radio" name='gender' id='male' value='male' />
          <label htmlFor="male">Male</label>
          <input type="radio" name='gender' id='female' value='female' />
          <label htmlFor="female">Female</label>
          <input type="radio" name='gender' id='other' value='other' />
          <label htmlFor="other">Other</label>
          </NewUserGender>
        </NewUserFormItem>
        <NewUserFormItem>
          <label>Active</label>
          <select name="active" id="active">
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </NewUserFormItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </Container>
  );
};
