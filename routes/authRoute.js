const router = require( 'express' ).Router();
const authController = require( '../controllers/authController' );

router.post( '/register', authController.signupUser );
router.post( '/login', authController.signinUser );

module.exports = router;
