import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Cart } from './pages/cart/Cart';
import { Home } from './pages/home/Home';
import { Product } from './pages/products/Product';
import { ProductList } from './pages/products/ProductList';

export const App = () => {
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
			</Switch>
		</Router>
	);
};
