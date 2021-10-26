import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const KEY =
	'pk_test_51JmHqYKAh2TuRMk11ZFyPMn2IkkRMEHVAu7UVTh2f6TOYIKNAbhXow7byjQLi813EdDYXPtkQuJ2l3oej1J3xkgx00CiifpDQb';

export const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null)
  const history = useHistory()
  const onToken = (token) => {
    console.log( 'stripe token >>>>', token );
    setStripeToken(token)
  }

  useEffect( () => {
    const makeRequest = async () => {
      try {
        const res = axios.post( "http://localhost:8080/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 25000
        } )
        console.log( res.data );
        history.push('/success')
      } catch (err) {
        console.log(err.message);
      }
    }
    stripeToken && makeRequest();
  },[stripeToken, history])
  return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{stripeToken ? (
				<span>Processing. Please wait</span>
			) : (
				<StripeCheckout
					name='Visionary Store'
					image='https://avatars.githubusercontent.com/u/1486366?v=4'
					billingAddress
					shippingAddress
					description='Your total is $250'
					amount={25000}
					token={onToken}
					stripeKey={KEY}
				>
					<button
						style={{
							border: 'none',
							width: 120,
							borderRadius: 5,
							backgroundColor: 'black',
							color: 'white',
							fontWeight: '600',
							cursor: 'pointer',
						}}
					>
						Pay Now
					</button>
				</StripeCheckout>
			)}
		</div>
	);
}
