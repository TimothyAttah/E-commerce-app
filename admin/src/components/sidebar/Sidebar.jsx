import { LineStyle, Mail, PermIdentity, Report, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

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
	.MuiSvgIcon-root{
    margin-right: 5px;
    font-size: 1.1rem;
  }
   :hover {
		background-color: var(--dark-gray);
	}
`;

export const Sidebar = () => {
  return (
    <Container>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <LineStyle />
              Home
            </SidebarListItem>
            <SidebarListItem>
              <Timeline />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUp />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <PermIdentity />
              Users
            </SidebarListItem>
            <SidebarListItem>
              <PermIdentity />
              Products
            </SidebarListItem>
            <SidebarListItem>
              <PermIdentity />
              Transactions
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUp />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <Mail />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <Timeline />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUp />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Staff</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <WorkOutline />
              Manager
            </SidebarListItem>
            <SidebarListItem>
              <Timeline />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <Report />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </Container>
  )
}
