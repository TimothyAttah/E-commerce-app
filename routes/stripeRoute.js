const router = require('express').Router();
const stripeController = require('../controllers/stripeController');

router.post( '/payment', stripeController.createPayment );

module.exports = router;
