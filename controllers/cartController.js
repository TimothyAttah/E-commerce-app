const Cart = require('../models/CartModel');

const cartControllers = {
	// CREATE
	createCart: async (req, res) => {
		const newCart = new Cart(req.body);
		try {
			const savedCart = await newCart.save();
			res.status(200).json({ message: 'New Cart added', savedCart });
		} catch (err) {
			return res.status(500).json({ error: err.message });
		}
	},

	// UPDATE
	updateCart: async (req, res) => {
		try {
			const updatedCart = await Cart.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res
				.status(200)
				.json({ message: 'Cart updated successfully.', updatedCart });
		} catch (err) {
			return res.status(500).json({ error: err.message });
		}
	},

	// DELETE
	deleteCart: async (req, res) => {
		try {
			await Cart.findByIdAndDelete(req.params.id);
			res.status(200).json('Cart has been deleted... ');
		} catch (err) {
			return res.status(500).json({ error: err.message });
		}
	},

	// GET USER CART
	getUserCart: async (req, res) => {
		try {
			const cart = await Cart.findOne({id: req.params.id});
			res
				.status(200)
				.json(cart);
		} catch (err) {
			return res.status(500).json({ error: err.message });
		}
	},

	// GET ALL CART
	getAllCarts: async (req, res) => {
		try {
			const carts = await Cart.find();
			res.status(200).json(carts);
		} catch (err) {
			return res.status(500).json({ error: err.message });
		}
	},
};

module.exports = cartControllers;
