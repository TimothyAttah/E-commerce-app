import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar'
import { Home } from './pages/home/Home';
import { UserList } from './pages/user/UserList';
import { UserUpdate } from './pages/user/UserUpdate';
import { UserCreate } from './pages/user/UserCreate';
import { ProductList } from './pages/products/ProductList';
import { ProductUpdate } from './pages/products/ProductUpdate';
import { ProductCreate } from './pages/products/ProductCreate';
import { UserSignIn } from './pages/user/UserSignIn';

export const Container = styled.div`
	display: flex;
	margin-top: 10px;
`;

export const App = () => {

const userToken = JSON.parse(localStorage.getItem('persist:root'));

const user = JSON.parse(userToken.user);
	
	const admin = user.currentUser.user.isAdmin

	return (
		<Router>
			<Switch>
				<Route path='/users/signin'>
					<UserSignIn />
				</Route>
				{ admin && (
					<>
				<Topbar />
				<Container>
					<Sidebar />
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/users' exact>
						<UserList />
					</Route>
					<Route path='/user/edit/:userId' exact>
						<UserUpdate />
					</Route>
					<Route path='/users/create/user'>
						<UserCreate />
					</Route>
					<Route path='/products' exact>
						<ProductList />
					</Route>
					<Route path='/product/edit/:productId'>
						<ProductUpdate />
					</Route>
					<Route path='/products/create/product'>
						<ProductCreate />
					</Route>
				</Container>
				</>
				)}
			</Switch>
		</Router>
	);
}
