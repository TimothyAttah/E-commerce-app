import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar'
import { Home } from './pages/home/Home';
import { UserList } from './pages/user/UserList';

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
					<Route path='/users'>
						<UserList />
					</Route>
				</Switch>
			</Container>
		</Router>
	)
}
