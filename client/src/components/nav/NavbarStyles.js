import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
	height: 60px;
	${mobile({
		height: '50px',
	})}
`;

export const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile({
		padding: '10px 0px',
	})}
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
export const Language = styled.span`
	font-size: 0.9rem;
	cursor: pointer;
	${mobile({
		display: 'none',
	})}
`;
export const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
	.MuiSvgIcon-root {
		font-size: 1rem;
		display: flex;
		align-items: center;
		color: gray;
	}
	${mobile({
		marginLeft: '5px',
	})}
`;
export const Input = styled.input`
	${mobile({
		width: '50px',
		marginLeft: '0px',
	})}
`;

export const Center = styled.div`
	flex: 1;
	text-align: center;
`;
export const Logo = styled.h1`
	text-transform: uppercase;
	font-weight: bold;
	${mobile({
		fontSize: '1.1rem',
		marginLeft: '5px',
	})}
`;

export const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({
		flex: 2,
		justifyContent: 'center',
	})}
`;
export const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	text-transform: uppercase;
	${mobile({
		fontSize: '12px',
		marginLeft: '5px',
		fontWeight: '600',
	})}
`;
