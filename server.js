const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const app = express();
const connectDB = require('./config/db');

connectDB();

app.use( cors() );
app.use( express.json() );

app.get( '/', ( req, res ) => {
	res.send('hello world')
})

app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/users', require('./routes/usersRoute'));
app.use('/api/products', require('./routes/productRoute'));
app.use('/api/carts', require('./routes/cartRoute'));
app.use('/api/orders', require('./routes/orderRoute'));
app.use('/api/checkout', require('./routes/stripeRoute'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
	console.log(`Backend server is running on port: ${PORT}`)
);
