const router = require( 'express' ).Router();
const { verifyTokenAndAdmin, verifyTokenAndAuthorization, verifyToken } = require( '../middlewares/auth' );
const cartController = require( '../controllers/cartController' );

router.post( '/create', verifyToken, cartController.createCart );

router.put( '/update/:id', verifyTokenAndAuthorization, cartController.updateCart );

router.delete( '/delete/:id', verifyTokenAndAuthorization, cartController.deleteCart );

router.get( '/find/:id', verifyTokenAndAuthorization, cartController.getUserCart );

router.get( '/', verifyTokenAndAdmin, cartController.getAllCarts );


module.exports = router;