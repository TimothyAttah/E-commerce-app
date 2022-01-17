import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { PermIdentity, Visibility } from '@material-ui/icons';
import { userRequest } from '../../../requestMethods';

export const Container = styled.div`
	flex: 1;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;
export const WidgetTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const WidgetList = styled.ul`

`;
export const WidgetListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;
  .MuiAvatar-root{
    margin-right: 10px;
  }
`;
export const WidgetUser = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WidgetUsername = styled.span`
  font-weight: 600;
`;
export const WidgetUserTitle = styled.span`
  font-weight: 300;
`;
export const WidgetButton = styled.button`
	display: flex;
	align-items: center;
	border-radius: 10px;
	padding: 7px 10px;
	background-color: #eeeef7;
	color: var(--text-gray);
	.MuiSvgIcon-root {
		margin-right: 5px;
    font-size: 1rem;
	}
`;

export const WidgetSmall = () => {
  const [ users, setUsers ] = useState( [] );

  useEffect( () => {
    const getUsers = async () => {
     try {
       const res = await userRequest.get( 'users/?new=true' );
       setUsers(res.data);
     } catch (err) {
       console.log(err.message);
     }
    }
    getUsers();
  },[])
  return (
		<Container>
			<WidgetTitle>New Join Members</WidgetTitle>
			<WidgetList>
				{users.map(user => (
					<WidgetListItem key={user._id}>
            <Avatar>
              {user?.img ? (<img src={user?.img} alt='' />) : (<PermIdentity/>)}
						</Avatar>
						<WidgetUser>
							<WidgetUsername>{user?.username}</WidgetUsername>
						</WidgetUser>
						<WidgetButton>
							<Visibility />
							Display
						</WidgetButton>
					</WidgetListItem>
				))}
			</WidgetList>
		</Container>
	);
}
