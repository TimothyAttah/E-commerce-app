import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar'
import { Home } from './pages/home/Home';
import { UserList } from './pages/user/UserList';
import { UserUpdate } from './pages/user/UserUpdate';
import { UserCreate } from './pages/user/UserCreate';

export const Container = styled.div`
	display: flex;
	margin-top: 10px;
`;

export const App = () => {
	return (
		<Router>
			<Topbar />
			<Container>
				<Sidebar />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/users' exact>
						<UserList />
					</Route>
					<Route path='/user/edit/:userId' exact>
						<UserUpdate />
					</Route>
					<Route path='/users/create/user' >
						<UserCreate />
					</Route>
				</Switch>
			</Container>
		</Router>
	)
}
