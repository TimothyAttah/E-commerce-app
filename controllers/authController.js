const bcrypt = require('bcryptjs');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const authControllers = {
	// REGISTER USER
	signupUser: async (req, res) => {
		const userCredential = req.body;
		try {
			const { username, email, password } = userCredential;
			if (!username || !email || !password)
				return res.status(422).json({ error: 'Please fill in all fields.' });

			const user = await User.findOne({ email });
			if (user)
				return res
					.status(400)
					.json({ error: 'User with this email already exist' });

			const hashedPassword = CryptoJS.AES.encrypt(
				password,
				process.env.PASSWORD_SECRET
			).toString();
			const newUser = await new User({
				username,
				email,
				password: hashedPassword,
			});
			await newUser.save();
			res.status(201).json({ message: 'User successfully signed up.' });
		} catch (err) {
			console.log(err);
			res.status(500).json({ error: err });
		}
	},
	// lOGIN USERS
	signinUser: async (req, res) => {
		try {
			const userCredential = req.body;
			const { email, password } = userCredential;
			const user = await User.findOne({ email });
			if (!user)
				return res
					.status(404)
					.json({ error: 'Email or password is Incorrect.' });
			const validPassword = CryptoJS.AES.decrypt(
				user.password,
				process.env.PASSWORD_SECRET
			);
			const hashedPassword = validPassword.toString(CryptoJS.enc.Utf8);
			if (hashedPassword !== password)
				return res
					.status(400)
					.json({ error: 'Password or password is Incorrect.' });

			const accessToken = jwt.sign(
				{
					id: user._id,
					isAdmin: user.isAdmin,
				},
				process.env.JWT_SECRET,
				{ expiresIn: '3d' }
			);
			user.password = undefined;
			// const { password, ...others } = user._doc;
			res.status(201).json({ message: 'User successfully logged in.', user, accessToken });
		} catch (err) {
			res.status(500).json({ error: err });
		}
	},
};

module.exports = authControllers;
