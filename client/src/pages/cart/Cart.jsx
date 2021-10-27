import React, { useEffect, useState } from 'react';
import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Announcement } from '../../components/Announcement';
import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/nav/Navbar';
import {
	Container,
	Wrapper,
	Title,
	Top,
	TopButton,
	TopText,
	TopTexts,
	Bottom,
	Image,
	Info,
	PriceDetail,
	Product,
	ProductAmount,
	ProductAmountContainer,
	ProductColor,
	ProductDetail,
	ProductId,
	ProductName,
	ProductPrice,
	ProductSize,
	Summary,
	SummaryButton,
	SummaryItem,
	SummaryItemPrice,
	SummaryItemText,
	SummaryTitle,
	Hr,
	Details,
} from './CartStyles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { userRequest } from '../../requestMethods';

const KEY = process.env.REACT_APP_STRIPE;

export const Cart = () => {
	const cart = useSelector( state => state.cart );
	const [stripeToken, setStripeToken] = useState(null);
	const history = useHistory();
	const onToken = token => {
		console.log('stripe token >>>>', token);
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = userRequest.post('/checkout/payment', {
					tokenId: stripeToken,
					amount: cart.total * 100
				});
				console.log(res.data);
				history.push('/success');
			} catch (err) {
				console.log(err.message);
			}
		};
		stripeToken && makeRequest();
	}, [stripeToken, cart.total, history]);
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
					<TopButton type='filled'>Checkout now</TopButton>
				</Top>
				<Bottom>
					<Info>
						{cart.products.map(product => (
							<Product>
								<ProductDetail>
									<Image src={product.img} alt='' />
									<Details>
										<ProductName>
											<b>Product:</b> {product.title}
										</ProductName>
										<ProductId>
											<b>ID:</b> {product._id}
										</ProductId>
										<ProductColor color={product.color} />
										<ProductSize>
											<b>Size:</b> {product.size}{' '}
										</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<Add />
										<ProductAmount>{product.quantity}</ProductAmount>
										<Remove />
									</ProductAmountContainer>
									<ProductPrice>
										$ {product.price * product.quantity}
									</ProductPrice>
								</PriceDetail>
							</Product>
						))}
						<Hr />
					</Info>
					<Summary>
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
						<StripeCheckout
					name='Visionary Store'
					image='https://avatars.githubusercontent.com/u/1486366?v=4'
					billingAddress
					shippingAddress
					description={`Your total is $${cart.total}`}
					amount={cart.total * 100}
					token={onToken}
					stripeKey={KEY}
						>
            <SummaryButton>Checkout now</SummaryButton>
				</StripeCheckout>
          </Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};
