import { Avatar } from '@material-ui/core';
import {
	Publish,
} from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Chart } from '../../components/chart/Chart';
import { productData } from '../../components/dummyData';
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

export const ProductUpdateTitle = styled.span`
	font-size: 1.6rem;
	font-weight: 600;
`;
export const ProductUpdateForm = styled.form`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;
export const ProductUpdateLeft = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	label {
		margin-bottom: 10px;
		font-size: 0.8rem;
    color: var(--gray);
	}
	input {
		width: 250px;
		height: 30px;
    padding: 5px;
    margin-bottom: 10px;
		border-bottom: 1px solid var(--gray);
	}
  select{
    margin-bottom: 10px;
  }
`;
export const ProductUpdateRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
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

export const ProductTop = styled.div`
  display: flex;
`;
export const ProductTopLeft = styled.div`
	flex: 1;
  width: 50%;
`;
export const ProductTopRight = styled.div`
	flex: 1;
	width: 50%;
	padding: 20px;
	margin: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: 600;
    margin-left: 20px;
  }
`;
export const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;
export const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
export const ProductInfoItemKey = styled.span`

`;
export const ProductInfoItemValue = styled.span`
  font-weight: 300;
  color: var(--gray);
`;
export const ProductBottom = styled.div`
	padding: 20px;
	margin: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const ProductUpdate = () => {
	const location = useLocation();
	console.log(location);
	return (
		<Container>
			<ProductTitleContainer>
				<ProductTitle>Product</ProductTitle>
				<Link to='/products/create/product'>
					<ProductButton>Create</ProductButton>
				</Link>
			</ProductTitleContainer>
			<ProductTop>
				<ProductTopLeft>
					<Chart
						data={productData}
						activeData='Sales'
						title='Sales Performance'
					/>
				</ProductTopLeft>
				<ProductTopRight>
					<ProductInfoTop>
						<Avatar>
							<img src={images.Img1} alt='' />
						</Avatar>
						<span>Apple Airpods</span>
					</ProductInfoTop>
					<ProductInfoBottom>
						<ProductInfoItem>
							<ProductInfoItemKey>Id:</ProductInfoItemKey>
							<ProductInfoItemValue>123</ProductInfoItemValue>
						</ProductInfoItem>
						<ProductInfoItem>
							<ProductInfoItemKey>Sales:</ProductInfoItemKey>
							<ProductInfoItemValue>6123</ProductInfoItemValue>
						</ProductInfoItem>
						<ProductInfoItem>
							<ProductInfoItemKey>active:</ProductInfoItemKey>
							<ProductInfoItemValue>yes</ProductInfoItemValue>
						</ProductInfoItem>
						<ProductInfoItem>
							<ProductInfoItemKey>in stock:</ProductInfoItemKey>
							<ProductInfoItemValue>no</ProductInfoItemValue>
						</ProductInfoItem>
					</ProductInfoBottom>
				</ProductTopRight>
			</ProductTop>
			<ProductBottom>
				<ProductUpdateForm>
					<ProductUpdateLeft>
							<label>Product Name</label>
              <input type='text' placeholder='Apple AirPod' />
              <label>In Stock</label>
              <select name="inStock" id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
					</ProductUpdateLeft>
					<ProductUpdateRight>
						<ProductUpdateUpload>
							<Avatar>
								<img src={images.Img1} alt='' />
							</Avatar>
							<label htmlFor='file'>
								<Publish />
							</label>
							<input type='file' id='file' />
						</ProductUpdateUpload>
						<ProductUpdateButton>Update</ProductUpdateButton>
					</ProductUpdateRight>
				</ProductUpdateForm>
			</ProductBottom>
		</Container>
	);
};
