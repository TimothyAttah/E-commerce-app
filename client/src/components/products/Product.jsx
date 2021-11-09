/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Info = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 15px;
	min-width: 280px;
	height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  :hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  /* height: 75%;
  width: 100%; */
  z-index: 2;
`;

const IconItem = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	.MuiSvgIcon-root {
		font-size: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		color: black;
	}
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

export const Product = ( { item } ) => {
  return (
    <Container>
      <Circle />
      <Image src={ item.img } alt="" />
      <Info>
        <IconItem>
          <ShoppingCartOutlined />
        </IconItem>
        <IconItem>
          <Link to={`/product/${item._id}`}>
            <Search/>
          </Link>
        </IconItem>
        <IconItem>
          <FavoriteBorderOutlined />
        </IconItem>
      </Info>
    </Container>
  );
};
