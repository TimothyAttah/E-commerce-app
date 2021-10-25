import React from 'react';
import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
// import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import { Announcement } from '../../components/Announcement';
import { Footer } from '../../components/footer/Footer';
import { images } from '../../components/images';
import { Navbar } from '../../components/nav/Navbar';
import { mobile } from '../../responsive';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`

`;
const Wrapper = styled.div`
	padding: 20px;
	${mobile({
    padding: '10px',
  })}
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  text-transform: uppercase;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => (props.type === 'filled' ? 'black' : 'transparent')};
  color: ${props => props.type === 'filled' && 'white'};
`;
const TopTexts = styled.div`
	${mobile({
    display: 'none',
  })}
`;
const TopText = styled.span`
text-transform: capitalize;
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({
    flexDirection: 'column',
  })}
`;

const Info = styled.div`
flex: 3;
`;
const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({
    flexDirection: 'column',
  })}
`;
const ProductDetail = styled.div`
flex:2;
display: flex;
`;
const PriceDetail = styled.div`
	flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
width: 200px;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
/* justify-content: space-between; */
`;
const ProductName = styled.span`
text-transform: uppercase;
b{
  text-transform: capitalize;
}
`;
const ProductId = styled.span`
text-transform: uppercase;
`;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`;
const ProductSize = styled.span`
text-transform: uppercase;
b{
  text-transform: capitalize;
}
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
	font-size: 2em;
	margin: 5px;
	${mobile({
    margin: '5px 15px',
  })}
`;
const ProductPrice = styled.div`
	font-size: 3em;
	font-weight: 200;
	${mobile({
    marginBottom: '20px',
  })}
`;

const Summary = styled.div`
	flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
	text-transform: uppercase;
  font-weight: 200;
`;
const SummaryItem = styled.div`
	/* text-transform: uppercase; */
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '500 '};
  font-size: ${props => props.type === 'total' && '2.1em '};
`;
const SummaryItemText = styled.span`
	/* text-transform: uppercase; */
`;
const SummaryItemPrice = styled.span`
	/* text-transform: uppercase; */
`;
const SummaryButton = styled.button`
	text-transform: uppercase;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export const Cart = () => {
  const cart = useSelector( state => state.cart );
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>your bag</Title>
        <Top>
          <TopButton>Continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            { cart.products.map( product => (
              <Product>
                <ProductDetail>
                  <Image src={ product.img } alt="" />
                  <Details>
                    <ProductName><b>Product:</b> {product.title}</ProductName>
                    <ProductId><b>ID:</b> {product._id}</ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize><b>Size:</b> {product.size} </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{ product.quantity }</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ { product.price * product.quantity }</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={ images.Img5 } alt="" />
                <Details>
                  <ProductName><b>Product:</b> Hakura t-shirt</ProductName>
                  <ProductId><b>ID:</b> 9375630965421</ProductId>
                  <ProductColor color="gray" />
                  <ProductSize><b>Size:</b> m </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          {/* <Summary>
            <SummaryTitle>Order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ { cart.total }</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ { cart.total }</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Checkout now</SummaryButton>
          </Summary> */}
          <Summary>
            <SummaryTitle>Order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Checkout now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
