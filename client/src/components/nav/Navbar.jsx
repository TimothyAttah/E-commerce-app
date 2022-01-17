import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {
  Container, Center, Language,
  Left, Logo, Right, Input,
  SearchContainer, MenuItem, Wrapper
 } from './NavbarStyles';


export const Navbar = () => {
  const quantity = useSelector( state => state.cart.quantity );
  const cart = useSelector( state => state.cart );
  
  console.log('qun', quantity);
  console.log('cart', cart);
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
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};
