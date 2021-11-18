import styled from 'styled-components';

export const Container = styled.div`
	flex: 4;
`;
export const NewProductTitle = styled.h1``;
export const NewProductForm = styled.form`
	margin-top: 10px;
`;
export const NewProductFormItem = styled.div`
	width: 250px;
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
	> input {
		border: none;
	}
	label {
		margin-bottom: 10px;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--gray);
	}
	input {
		height: 30px;
		padding: 20px 10px;
		border: 1px solid var(--gray);
		border-radius: 5px;
		:first-child {
			border: none;
		}
	}
	select {
		height: 40px;
		padding: 10px;
		border-radius: 5px;
	}
`;
export const NewProductGender = styled.div`
	input {
		margin-top: 15px;
		height: 15px;
		padding: 0;
	}
	label {
		margin: 10px;
		font-size: 1.1rem;
		color: var(--text-gray);
		font-weight: normal;
	}
`;
export const NewProductButton = styled.button`
	width: 200px;
	background-color: var(--darkBlue);
	color: var(--text-white);
	padding: 7px 10px;
	border-radius: 10px;
	font-weight: 600;
	margin-top: 30px;
`;
