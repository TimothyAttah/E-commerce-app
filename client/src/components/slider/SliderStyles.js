import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	${mobile({
		display: 'none',
	})}
`;

export const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${props => props.dir === 'left' && '10px'};
	right: ${props => props.dir === 'right' && '10px'};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${props => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${props => props.bg};
`;
export const ImageContainer = styled.div`
	height: 100%;
	flex: 1;
`;
export const Image = styled.img`
	height: 80%;
`;
export const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

export const Title = styled.h1`
	text-transform: uppercase;
	font-size: 5rem;
`;
export const Desc = styled.p`
	text-transform: uppercase;
	margin: 50px 0px;
	font-size: 1.3rem;
	font-weight: 500;
	letter-spacing: 3px;
`;
export const Button = styled.button`
	text-transform: uppercase;
	padding: 10px;
	font-size: 1.2rem;
	background: transparent;
	border: 1px solid gray;
`;
