import React from 'react';
import styled from 'styled-components';
import { Sidebar } from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar'

export const Container = styled.div`
	display: flex;
`;

export const App = () => {
	return (
		<div>
			<Topbar />
			<Container>
				<Sidebar />
			</Container>
		</div>
	)
}
