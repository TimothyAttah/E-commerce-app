const router = require( 'express' ).Router();
const {
	verifyTokenAndAdmin,
	verifyTokenAndAuthorization,
  verifyToken,
} = require( '../middlewares/auth' );
const orderController = require( '../controllers/orderController' );

router.post( '/create', verifyToken, orderController.createOrder );

router.put(
	'/update/:id',
	verifyTokenAndAdmin,
	orderController.updateOrder
);

router.delete(
	'/delete/:id',
	verifyTokenAndAdmin,
	orderController.deleteOrder
);

router.get(
	'/find/:userId',
	verifyTokenAndAuthorization,
	orderController.getUserOrders
);

router.get( '/', verifyTokenAndAdmin, orderController.getAllOrders );

router.get('/income', verifyTokenAndAdmin, orderController.getMonthlyIncome);


module.exports = router;
