const bcrypt = require('bcryptjs');
const User = require( '../models/UserModel' );
const CryptoJS = require('crypto-js')

const userControllers = {
	// UPDATE USER
	updateUser: async (req, res) => {
		const { password } = req.body;
		const id = req.params.id;
		if ( password ) {
			password = CryptoJS.AES.encrypt(
				password,
				process.env.PASSWORD_SECRET
			).toString()
		}
	
		try {
			const updatedUser = await User.findByIdAndUpdate( id, {
				$set: req.body
			}, { new: true } )
				const { password, ...others } = updatedUser._doc;
			req.user.password = undefined;
			res.status(200).json({message: "Updated successfully", others})
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},

	// DELETE USER
	deleteUser: async (req, res) => {
	try {
		await User.findOneAndDelete( req.params.id )
		res.status( 200 ).json('User has been deleted...')
	} catch (err) {
		return res.status(500).json({ error: err });
	}
	},

	// GET USER
	getUser: async (req, res) => {
	try {
		const user = await User.findById( req.params.id )
		const { password, ...others } = user._doc;
		res.status( 200 ).json( others );
	} catch (err) {
		return res.status(500).json({ error: err });
	}
	},
	// GET ALL USER
	getUsers: async ( req, res ) => {
		const query = req.query.new
	try {
		const users = query ? await User.find().sort( { _id: -1 } ).limit( 5 ) : await User.find().sort({_id:-1})
		// const { password, ...others } = users._doc;
		// req.user.password = undefined;
		res.status( 200 ).json( users ); 
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
	},
	// GET USER STATS
	getUserStats: async ( req, res ) => {
		const date = new Date();
		const lastYear = new Date( date.setFullYear( date.getFullYear() - 1 ) );
	try {
		const data = await User.aggregate([
			{ $match: { createdAt: { $gte: lastYear } } },
			{ $project: { month: { $month: '$createdAt' } } },
			{ $group: { _id: '$month', total: { $sum: 1 } } },
		]);
		res.status( 200 ).json( data );
	} catch (err) {
		return res.status(500).json({ error: err });
	}
	},

	// GET A USER
	// getUser: async ( req, res ) => {
	// 	const userId = req.query.userId;
	// 	const firstName = req.query.username;
	// 	try {
	// 		const user = userId
	// 			? await User.findById( userId )
	// 			: await User.findOne( { firstName } );
	// 		const { password, updatedAt, ...other } = user._doc;
	// 		res.status(200).json({ message: 'My Account. ', other });
	// 	} catch (err) {
	// 		return res.status(500).json({ error: err });
	// 	}
	// },

	// GET FRIENDS
	getFriends: async ( req, res ) => {
		try {
			const user = await User.findById( req.params.userId );
			const friends = await Promise.all(
				user.followings.map( friendId => {
					return User.findById(friendId)
				})
			)
			let friendList = [];
			friends.map( friend => {
				const { _id, firstName, lastName, profilePicture } = friend;
				friendList.push( { _id, firstName, lastName, profilePicture } );
			} );
			res.status( 200 ).json( friendList );
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},

	// FOLLOW A USER
	followUsers: async (req, res) => {
		if (req.body.userId !== req.params.id) {
			try {
				const user = await User.findById(req.params.id);
				const currentUser = await User.findById(req.body.userId);
				if (!user.followers.includes(req.body.userId)) {
					await user.updateOne({ $push: { followers: req.body.userId } });
					await currentUser.updateOne({
						$push: { followings: req.body.params.id },
					});
					res.status(200).json({ message: 'User has been followed.' });
				} else {
					return res
						.status(403)
						.json({ error: 'You already follow this user' });
				}
			} catch (err) {
				return res.status(500).json({ error: err });
			}
		} else {
			return res.status(403).json({ error: "You can't follow yourself" });
		}
	},

	// UNFOLLOW A USER
	unfollowUsers: async (req, res) => {
		if (req.body.userId !== req.params.id) {
			try {
				const user = await User.findById(req.params.id);
				// const currentUser = await User.findById(req.params.id);
				const currentUser = await User.findById(req.body.userId);
				if (user.followers.includes(req.body.userId)) {
					await user.updateOne({ $pull: { followers: req.body.userId } });
					await currentUser.updateOne({
						$pull: { followings: req.body.params.id },
					});
					res.status(200).json({ message: 'User has been unfollow.' });
				} else {
					return res
						.status(403)
						.json({ error: 'You don\'t this user' });
				}
			} catch (err) {
				return res.status(500).json({ error: err });
			}
		} else {
			return res.status(403).json({ error: "You can't unfollow yourself" });
		}
	},
};

module.exports = userControllers;
