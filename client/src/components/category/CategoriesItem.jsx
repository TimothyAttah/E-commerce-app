/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	${mobile({
    height: '30vh',
  })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
	padding: 10px;
	background-color: white;
	color: gray;
	font-weight: 600;
	text-transform: uppercase;
`;

export const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={ item.img } alt="" />
        <Info>
          <Title>{ item.title }</Title>
          <Button>Shop now</Button>
        </Info>
      </Link>
    </Container>
  );
};
