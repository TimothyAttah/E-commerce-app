import styled from 'styled-components';
import { images } from '../../components/images';
import { mobile } from '../../responsive';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url(${images.Photo3}) center no-repeat;
	background-size: cover;

	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Wrapper = styled.div`
	width: 50%;
	padding: 20px;
	background-color: white;
	${mobile({
		width: '75%',
	})}
`;
export const Title = styled.h1`
	text-transform: uppercase;
	font-size: 1.5em;
	font-weight: 300;
`;
export const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
export const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
	border: 1px solid gray;
`;
export const Agreement = styled.span`
	font-size: 0.7em;
	margin: 20px 0;
`;
export const Button = styled.button`
	text-transform: uppercase;
	width: 40%;
	padding: 15px 20px;
	background-color: teal;
	color: white;
`;
