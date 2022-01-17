import styled, { css } from 'styled-components';

export const Container = styled.div`
	flex: 4;
	padding: 20px;
`;
export const UserTitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const UserTitle = styled.h1``;
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
	${props =>
		props.info &&
		css`
			font-weight: normal;
			margin-left: 10px;
		`}
`;
export const UserShowUserTitle = styled.span`
	font-weight: 300;
	${props =>
		props.primary &&
		css`
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
	.MuiSvgIcon-root {
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
export const UserUpdateLeft = styled.div``;
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
	.MuiSvgIcon-root {
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
