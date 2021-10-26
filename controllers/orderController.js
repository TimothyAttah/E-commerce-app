const Order = require('../models/OrderModel');

const orderControllers = {
	// CREATE
	createOrder: async (req, res) => {
		const newOrder = new Order(req.body);
		try {
			const savedOrder = await newOrder.save();
			res.status(200).json({ message: 'New order created', savedOrder });
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},

	// // UPDATE
	updateOrder: async (req, res) => {
		try {
			const updatedOrder = await Order.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res
				.status(200)
				.json({ message: 'Order updated successfully.', updatedOrder });
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},

	// // DELETE
	deleteOrder: async (req, res) => {
		try {
			await Order.findByIdAndDelete(req.params.id);
			res.status(200).json('Order has been deleted... ');
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},

	// // GET USERS ORDERS 
	getUserOrders: async (req, res) => {
		try {
			const orders = await Order.find({ userId: req.params.userId });
			res.status(200).json({ message: 'Order has been deleted... ', orders });
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},

	// // GET ALL ORDERS
	getAllOrders: async (req, res) => {
		try {
			const orders = await Order.find();
			res.status(200).json(orders);
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},

	// // GET MONTHLY INCOME
	getMonthlyIncome: async (req, res) => {
		const date = new Date();
		const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
		const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
		try {
			const income = await Order.aggregate([
				{ $match: { createdAt: { $gte: previousMonth } } },
				{ $project: { month: { $month: '$createdAt' }, sales: "$amount" } },
				{ $group: { _id: '$month', total: { $sum: "$sales" } } },
			]);
			res.status(200).json(income);
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},
};



module.exports = orderControllers;
