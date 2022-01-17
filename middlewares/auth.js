const jwt = require( 'jsonwebtoken' );

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.token;
	if (!authHeader)
		return res
			.status(401)
			.json({ error: ' Unauthorize user, Permission denied.' });
	const token = authHeader.split(' ')[1];
	jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
		if (err)
			return res
				.status(403)
				.json({ error: 'Token is not valid. Permission denied.' });
		req.user = user;
		next();
	});
};

const verifyTokenAndAuthorization = ( req, res, next ) => {
  verifyToken( req, res, () => {
    if ( req.user.id === req.params.id || req.user.isAdmin ) {
      next()
    } else {
      return res.status(403).json('Unauthorize user. Permission denied.');
    }
  }) 
}
const verifyTokenAndAdmin = ( req, res, next ) => {
  verifyToken( req, res, () => {
    if ( req.user.isAdmin ) {
      next()
    } else {
      return res.status(403).json('Unauthorize user. Permission denied.');
    }
  })
}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}
