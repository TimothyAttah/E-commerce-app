import { Avatar } from '@material-ui/core';
import {
	CalendarToday,
	LocationSearching,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../components/images';
import {
	Container,
	UserButton,
	UserContainer,
	UserShowBottom,
	UserShowContainer,
	UserShowInfo,
	UserShowTop,
	UserShowTopTitle,
	UserShowUserTitle,
	UserShowUsername,
	UserTitle,
	UserTitleContainer,
	UserUpdateButton,
	UserUpdateContainer,
	UserUpdateForm,
	UserUpdateItem,
	UserUpdateLeft,
	UserUpdateRight,
	UserUpdateTitle,
	UserUpdateUpload,
} from './UserUpdateStyles';

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
								<input type='text' placeholder='annabeck99' />
							</UserUpdateItem>
							<UserUpdateItem>
								<label>Full Name</label>
								<input type='text' placeholder='Anna Beck' />
							</UserUpdateItem>
							<UserUpdateItem>
								<label>Email</label>
								<input type='text' placeholder='annabeck99@gmail.com' />
							</UserUpdateItem>
							<UserUpdateItem>
								<label>Phone</label>
								<input type='text' placeholder='+123 456 789' />
							</UserUpdateItem>
							<UserUpdateItem>
								<label>Address</label>
								<input type='text' placeholder='New York | USA' />
							</UserUpdateItem>
						</UserUpdateLeft>
						<UserUpdateRight>
							<UserUpdateUpload>
								<Avatar>
									<img src={images.ProPic} alt='' />
								</Avatar>
								<label htmlFor='file'>
									<Publish />
								</label>
								<input type='file' id='file' />
							</UserUpdateUpload>
							<UserUpdateButton>Update</UserUpdateButton>
						</UserUpdateRight>
					</UserUpdateForm>
				</UserUpdateContainer>
			</UserContainer>
		</Container>
	);
};
