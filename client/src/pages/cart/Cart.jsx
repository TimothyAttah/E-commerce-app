import React from 'react';
import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
// import StripeCheckout from 'react-stripe-checkout';
import { Announcement } from '../../components/Announcement';
import { Footer } from '../../components/footer/Footer';
import { images } from '../../components/images';
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

const KEY = process.env.REACT_APP_STRIPE;

export const Cart = () => {
	const cart = useSelector(state => state.cart);
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
						<Product>
							<ProductDetail>
								<Image src={images.Img5} alt='' />
								<Details>
									<ProductName>
										<b>Product:</b> Hakura t-shirt
									</ProductName>
									<ProductId>
										<b>ID:</b> 9375630965421
									</ProductId>
									<ProductColor color='gray' />
									<ProductSize>
										<b>Size:</b> m{' '}
									</ProductSize>
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
						<SummaryItem type='total'>
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
