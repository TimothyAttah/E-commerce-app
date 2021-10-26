const router = require( 'express' ).Router();
const userControllers = require( '../controllers/usersControllers' );
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require( '../middlewares/auth' );

router.put( '/update/:id', verifyTokenAndAuthorization, userControllers.updateUser );

router.delete( '/delete/:id', verifyTokenAndAuthorization, userControllers.deleteUser );

router.get( '/find/:id', verifyTokenAndAdmin, userControllers.getUser );

router.get( '/', verifyTokenAndAdmin, userControllers.getUsers );

router.get( '/stats', verifyTokenAndAdmin,  userControllers.getUserStats );

router.put( '/:id/follow', userControllers.followUsers );

router.put( '/:id/unfollow', userControllers.unfollowUsers );

router.get( '/friends/:userId', userControllers.getFriends );


module.exports = router;
