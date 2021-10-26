const router = require( 'express' ).Router();
const { verifyToken, verifyTokenAndAdmin } = require( '../middlewares/auth' );
const productController = require( '../controllers/productController' );

router.post( '/create', verifyTokenAndAdmin, productController.createProduct );

router.put( '/update/:id', verifyTokenAndAdmin, productController.updateProduct );

router.delete( '/delete/:id', verifyTokenAndAdmin, productController.deleteProduct );

router.get( '/find/:id', productController.getProduct );

router.get( '/', productController.getAllProducts );



module.exports = router;
