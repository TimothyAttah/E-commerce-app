import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Cart } from './pages/cart/Cart';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Product } from './pages/products/Product';
import { ProductList } from './pages/products/ProductList';
import { Register } from './pages/register/Register';

export const App = () => {
	 const user = true;
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/products/:category' exact>
					<ProductList />
				</Route>
				<Route path='/product/:id' exact>
					<Product />
				</Route>
				<Route path='/cart' exact>
					<Cart />
				</Route>
				<Route path='/login' exact>
					{user ? <Redirect to='/' /> : <Login />}
				</Route>
				<Route path='/register' exact>
					{user ? <Redirect to='/' /> : <Register />}
				</Route>
			</Switch>
		</Router>
	);
};
