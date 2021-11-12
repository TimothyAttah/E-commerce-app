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
import styled, { css } from 'styled-components';
import { images } from '../../components/images';

export const Container = styled.div`
	flex: 4;
	padding: 20px;
`;
export const ProductTitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const ProductTitle = styled.h1``;
export const ProductButton = styled.button`
	width: 80px;
	padding: 5px;
	border-radius: 5px;
	background-color: teal;
	color: var(--text-white);
	font-size: 1rem;
`;
export const ProductContainer = styled.div`
	display: flex;
	margin-top: 20px;
`;
export const ProductShowContainer = styled.div`
	flex: 1;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const ProductShowTop = styled.div`
	display: flex;
	align-items: center;
`;
export const ProductShowTopTitle = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`;
export const ProductShowProductName = styled.span`
	font-weight: 600;
	${props =>
		props.info &&
		css`
			font-weight: normal;
			margin-left: 10px;
		`}
`;
export const ProductShowProductTitle = styled.span`
	font-weight: 300;
	${props =>
		props.primary &&
		css`
			font-size: 0.8rem;
			font-weight: 600;
			color: var(--light-gray);
		`}
`;
export const ProductShowInfo = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
	color: var(--dark-gray-2);
	.MuiSvgIcon-root {
		font-size: 1rem;
	}
`;
export const ProductShowBottom = styled.div`
	margin-top: 20px;
`;
export const ProductUpdateContainer = styled.div`
	flex: 2;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	margin-left: 20px;
`;
export const ProductUpdateTitle = styled.span`
	font-size: 1.6rem;
	font-weight: 600;
`;
export const ProductUpdateForm = styled.form`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;
export const ProductUpdateLeft = styled.div``;
export const ProductUpdateRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const ProductUpdateItem = styled.div`
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
export const ProductUpdateUpload = styled.div`
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
	.MuiSvgIcon-root {
		display: inline-block;
		cursor: pointer;
	}
`;
export const ProductUpdateButton = styled.button`
	border-radius: 5px;
	padding: 5px;
	height: 30px;
	background-color: var(--darkBlue);
	color: var(--text-white);
	font-weight: 600;
`;

export const ProductUpdate = () => {
	return (
		<Container>
			<ProductTitleContainer>
				<ProductTitle>Edit Product</ProductTitle>
				<Link to='/products/create/product'>
					<ProductButton>Create</ProductButton>
				</Link>
			</ProductTitleContainer>
			<ProductContainer>
				<ProductShowContainer>
					<ProductShowTop>
						<Avatar>
							<img src={images.ProPic} alt='' />
						</Avatar>
						<ProductShowTopTitle>
							<ProductShowProductName>Anna Becker</ProductShowProductName>
							<ProductShowProductTitle>Software Engineer</ProductShowProductTitle>
						</ProductShowTopTitle>
					</ProductShowTop>
					<ProductShowBottom>
						<ProductShowProductTitle primary>Account Details</ProductShowProductTitle>
						<ProductShowInfo>
							<PermIdentity />
							<ProductShowProductName info>annabeck99</ProductShowProductName>
						</ProductShowInfo>
						<ProductShowInfo>
							<CalendarToday />
							<ProductShowProductName info>10.12.1999</ProductShowProductName>
						</ProductShowInfo>
						<ProductShowProductTitle primary>Contact Details</ProductShowProductTitle>
						<ProductShowInfo>
							<PhoneAndroid />
							<ProductShowProductName info>+1 234 567 890</ProductShowProductName>
						</ProductShowInfo>
						<ProductShowInfo>
							<MailOutline />
							<ProductShowProductName info>annabeck99@gmail.com</ProductShowProductName>
						</ProductShowInfo>
						<ProductShowInfo>
							<LocationSearching />
							<ProductShowProductName info>New York | USA</ProductShowProductName>
						</ProductShowInfo>
					</ProductShowBottom>
				</ProductShowContainer>
				<ProductUpdateContainer>
					<ProductUpdateTitle>Edit</ProductUpdateTitle>
					<ProductUpdateForm>
						<ProductUpdateLeft>
							<ProductUpdateItem>
								<label>ProductName</label>
								<input type='text' placeholder='annabeck99' />
							</ProductUpdateItem>
							<ProductUpdateItem>
								<label>Full Name</label>
								<input type='text' placeholder='Anna Beck' />
							</ProductUpdateItem>
							<ProductUpdateItem>
								<label>Email</label>
								<input type='text' placeholder='annabeck99@gmail.com' />
							</ProductUpdateItem>
							<ProductUpdateItem>
								<label>Phone</label>
								<input type='text' placeholder='+123 456 789' />
							</ProductUpdateItem>
							<ProductUpdateItem>
								<label>Address</label>
								<input type='text' placeholder='New York | USA' />
							</ProductUpdateItem>
						</ProductUpdateLeft>
						<ProductUpdateRight>
							<ProductUpdateUpload>
								<Avatar>
									<img src={images.ProPic} alt='' />
								</Avatar>
								<label htmlFor='file'>
									<Publish />
								</label>
								<input type='file' id='file' />
							</ProductUpdateUpload>
							<ProductUpdateButton>Update</ProductUpdateButton>
						</ProductUpdateRight>
					</ProductUpdateForm>
				</ProductUpdateContainer>
			</ProductContainer>
		</Container>
	);
};
