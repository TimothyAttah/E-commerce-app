const router = require('express').Router();
const {
	verifyTokenAndAdmin,
	verifyTokenAndAuthorization,
	verifyToken,
} = require('../middlewares/auth');
const stripeController = require('../controllers/stripeController');

router.post( '/payment', stripeController.createPayment );

module.exports = router;
