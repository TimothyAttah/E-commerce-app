import React from 'react';
import styled from 'styled-components';
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar'
import { Home } from './pages/home/Home';

export const Container = styled.div`
	display: flex;
	margin-top: 10px;
`;

export const App = () => {
	return (
		<div>
			<Topbar />
			<Container>
				<Sidebar />
				<Home />
			</Container>
		</div>
	)
}
