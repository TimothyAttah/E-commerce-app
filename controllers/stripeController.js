const stripe = require( 'stripe' )( process.env.STRIPE_KEY );

const stripeControllers = {
  createPayment: async ( req, res ) => {
    stripe.charges.create( {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd"
    }, ( stripeErr, stripeRes ) => {
      if ( stripeErr ) {
        return res.status( 500 ).json( stripeErr.message );
      } else {
         res.status( 200 ).json( stripeRes );
      }
    })
  }
}

module.exports = stripeControllers;
