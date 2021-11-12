import { Avatar } from '@material-ui/core';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import {Link} from 'react-router-dom'
import styled, { css } from 'styled-components';
import { images } from '../../components/images';

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
export const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
export const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const UserShowUsername = styled.span`
	font-weight: 600;
	${props => props.info && css`
    font-weight: normal;
    margin-left: 10px;
  `}
`;
export const UserShowUserTitle = styled.span`
  font-weight: 300;
  ${props => props.primary && css`
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--light-gray);
  `}
`;
export const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: var(--dark-gray-2);
  .MuiSvgIcon-root{
    font-size: 1rem;
  }
`;
export const UserShowBottom = styled.div`
  margin-top: 20px;
`;
export const UserUpdateContainer = styled.div`
	flex: 2;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px; 
`;
export const UserUpdateTitle = styled.span`
	font-size: 1.6rem;
	font-weight: 600;
`;
export const UserUpdateForm = styled.form`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;
export const UserUpdateLeft = styled.div`

`;
export const UserUpdateRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const UserUpdateItem = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	label {
		margin-bottom: 5px;
		font-size: 0.8rem;
	}
	input {
		width: 250px;
		height: 30px;
		border-bottom: 1px solid var(--gray);
	}
`;
export const UserUpdateUpload = styled.div`
	display: flex;
	align-items: center;
	.MuiAvatar-root {
		width: 100px;
		height: 100px;
		border-radius: 10px;
		margin-right: 20px;
		display: inline-block;
	}
	input {
		display: none;
	}
	.MuiSvgIcon-root{
		display: inline-block;
		cursor: pointer;
	}
`;
export const UserUpdateButton = styled.button`
	border-radius: 5px;
	padding: 5px;
	height: 30px;
	background-color: var(--darkBlue);
	color: var(--text-white);
	font-weight: 600;
`;

export const UserUpdate = () => {
  return (
		<Container>
			<UserTitleContainer>
				<UserTitle>Edit User</UserTitle>
				<Link to='/users/create/user'>
				<UserButton>Create</UserButton>
				</Link>
			</UserTitleContainer>
			<UserContainer>
				<UserShowContainer>
					<UserShowTop>
						<Avatar>
							<img src={images.ProPic} alt='' />
						</Avatar>
						<UserShowTopTitle>
							<UserShowUsername>Anna Becker</UserShowUsername>
							<UserShowUserTitle>Software Engineer</UserShowUserTitle>
						</UserShowTopTitle>
					</UserShowTop>
					<UserShowBottom>
						<UserShowUserTitle primary>Account Details</UserShowUserTitle>
						<UserShowInfo>
							<PermIdentity />
							<UserShowUsername info>annabeck99</UserShowUsername>
						</UserShowInfo>
						<UserShowInfo>
							<CalendarToday />
							<UserShowUsername info>10.12.1999</UserShowUsername>
						</UserShowInfo>
						<UserShowUserTitle primary>Contact Details</UserShowUserTitle>
						<UserShowInfo>
							<PhoneAndroid />
							<UserShowUsername info>+1 234 567 890</UserShowUsername>
						</UserShowInfo>
						<UserShowInfo>
							<MailOutline />
							<UserShowUsername info>annabeck99@gmail.com</UserShowUsername>
						</UserShowInfo>
						<UserShowInfo>
							<LocationSearching />
							<UserShowUsername info>New York | USA</UserShowUsername>
						</UserShowInfo>
					</UserShowBottom>
				</UserShowContainer>
				<UserUpdateContainer>
					<UserUpdateTitle>Edit</UserUpdateTitle>
					<UserUpdateForm>
						<UserUpdateLeft>
							<UserUpdateItem>
								<label>Username</label>
								<input type="text" placeholder='annabeck99' />
							</UserUpdateItem>
							<UserUpdateItem>
								<label>Full Name</label>
								<input type="text" placeholder='Anna Beck' />
							</UserUpdateItem>
							<UserUpdateItem>
								<label>Email</label>
								<input type="text" placeholder='annabeck99@gmail.com' />
							</UserUpdateItem>
							<UserUpdateItem>
								<label>Phone</label>
								<input type="text" placeholder='+123 456 789' />
							</UserUpdateItem>
							<UserUpdateItem>
								<label>Address</label>
								<input type="text" placeholder='New York | USA' />
							</UserUpdateItem>
						</UserUpdateLeft>
						<UserUpdateRight>
							<UserUpdateUpload>
								<Avatar>
									<img src={ images.ProPic } alt='' />
								</Avatar>
									<label htmlFor="file"><Publish /></label>
									<input type="file" id='file' />
							</UserUpdateUpload>
							<UserUpdateButton>Update</UserUpdateButton>
						</UserUpdateRight>
					</UserUpdateForm>
				</UserUpdateContainer>
			</UserContainer>
		</Container>
	);
}
