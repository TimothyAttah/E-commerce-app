import React from 'react'; 
import { Money, Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import {
  Container, ContactItem, Center,
  Left, List, ListItem, Logo,
  SocialContainer, SocialIcon, Desc,
  Title, Right, Payment
 } from './FooterStyles';


export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopping.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> 622 Dixie Path, South Winchester 98336
        </ContactItem>
        <ContactItem>
          <Phone/> + 1 234 567 890
        </ContactItem>
        <ContactItem>
          <MailOutline />
          contact@shopping.dev
        </ContactItem>
        <Payment>
          {/* <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" /> */}
          <Money color="red" />
          {/* <Icon name="cc paypal" color="blue" />
          <Icon name="cc visa" color="teal" />
          <Icon name="cc discover" color="yellow" /> */}
        </Payment>
      </Right>
    </Container>
  );
};
