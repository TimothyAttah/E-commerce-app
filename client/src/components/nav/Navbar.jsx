import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styled, { css } from 'styled-components';
// import { useSelector } from 'react-redux';
// import { Icon } from 'semantic-ui-react';
import { mobile } from '../../responsive';
import { Badge } from '@material-ui/core';

const Container = styled.div`
	height: 60px;
	${mobile({
    height: '50px'
  })}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile({
    padding: '10px 0px',
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
	font-size: 0.9rem;
	cursor: pointer;
	${mobile({
    display: 'none',
  })}
`;
const SearchContainer = styled.div`
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
const Input = styled.input`
	${mobile({
    width: '50px',
    marginLeft: '0px'
  })}
`;

const Center = styled.div`
	flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  text-transform: uppercase;
	font-weight: bold;
	${mobile({
    fontSize: '1.1rem',
    marginLeft: '5px'
  })}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile( {
    flex: 2,
    justifyContent: 'center',
  })}
`;
const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	text-transform: uppercase;
	${mobile({
    fontSize: '12px',
    marginLeft: '5px',
    fontWeight: '600'
  })}
`;

export const Navbar = () => {
  // const quantity = useSelector(state => state.cart.quantity );
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search name="search" />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopping.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Signin</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};
