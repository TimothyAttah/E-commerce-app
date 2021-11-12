import React from 'react';
import styled from 'styled-components';
import {  NavLink } from 'react-router-dom';
import { sidebarLists } from '../helper';

export const Container = styled.div`
  flex:1;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
  background-color: var(--light-bg);
`;
export const SidebarWrapper = styled.div`
  padding: 20px;
  color: var(--text-gray);
`;
export const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;
export const SidebarTitle = styled.h3`
  font-size: 0.8rem;
  color: var(--light-gray);
`;
export const SidebarList = styled.ul`
  padding: 5px;
`;
export const SidebarListItem = styled.li`
	padding: 5px;
	cursor: pointer;
	display: flex;
	align-items: center;
	border-radius: 10px;
	.MuiSvgIcon-root {
		margin-right: 5px;
		font-size: 1.1rem;
	}
	:hover {
		background-color: var(--dark-gray);
	}
	a {
		width: 100%;
		display: flex;
		align-items: center;
		border-radius: 10px;
		padding: 5px;
		color: var(--text-gray);
	}
`;

export const activeLink = {
	backgroundColor: 'var(--dark-gray)'
}

export const Sidebar = () => {
  return (
		<Container>
			<SidebarWrapper>
				{sidebarLists.map(item => (
					<SidebarMenu key={item.title}>
						<SidebarTitle>{item.title}</SidebarTitle>
						<SidebarList>
							{item.sidebarListsItems.map(list => (
								<SidebarListItem key={list.name}>
									{list.path ? (
										<NavLink to={list.path} exact activeStyle={activeLink}>
											{list.icon}
											{list.name}
										</NavLink>
									) : (
										<>
											{list.icon}
											{list.name}
										</>
									)}
								</SidebarListItem>
							))}
						</SidebarList>
					</SidebarMenu>
				))}
			</SidebarWrapper>
		</Container>
	);
}
