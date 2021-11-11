import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import styled, { css } from 'styled-components';
import { Avatar } from '@material-ui/core';
import { images } from '../../components/images'
import { DeleteOutline, EditOutlined } from '@material-ui/icons';

export const Container = styled.div`
  flex: 4;
`;
export const UserListUser = styled.div`
  display: flex;
  align-items: center;
  .MuiAvatar-root{
    width: 32px;
    height: 32px;
    margin-right: 10px; 
  }
`;
export const UserListButton = styled.button`
	border-radius: 10px;
	padding: 5px 10px;
	color: var(--red);
	${props =>
		props.edit &&
		css`
			background-color: #3bb077;
			color: var(--text-white);
			margin-right: 20px;
		`}
`;
// export const UserListUser = styled.div`

// `;


export const UserList = () => {
  const columns = [
    {field: 'id', headerName: 'ID', width: 100},
    {
      field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
        return (
					<UserListUser>
						<Avatar>
							{params.row.avatar}
            </Avatar>
            {params.row.username}
					</UserListUser>
				);
    }},
    {field: 'email', headerName: 'Email', width: 200},
    {field: 'status', headerName: 'Status', width: 120},
    {field: 'transaction', headerName: 'Transaction Volume', width: 220},
    {
      field: 'action', headerName: 'Action', width: 150, renderCell: ( params ) => {
        return (
					<div>
						<UserListButton edit>
							<EditOutlined />
						</UserListButton>
						<UserListButton>
							<DeleteOutline />
						</UserListButton>
					</div>
				);
    } },
  ]

  const rows = [
    {
      id: 1,
      username: 'Jon Snow',
      avatar: <img src={ images.ProPic } alt='' />,
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$120.00'
    },
    {
      id: 2,
      username: 'Elizabeth Keen',
      avatar: <img src={ images.ProPic } alt='' />,
      email: 'elizabeth@gmail.com',
      status: 'active',
      transaction: '$190.00'
    },
    {
      id: 3,
      username: 'Matthew Peters',
      avatar: <img src={ images.ProPic } alt='' />,
      email: 'matthew@gmail.com',
      status: 'active',
      transaction: '$155.00'
    },
    {
      id: 4,
      username: 'Mark Leonard',
      avatar: <img src={ images.ProPic } alt='' />,
      email: 'mark@gmail.com',
      status: 'active',
      transaction: '$165.00'
    },
    {
      id: 5,
      username: 'Esther Susan',
      avatar: <img src={ images.ProPic } alt='' />,
      email: 'esther@gmail.com',
      status: 'active',
      transaction: '$150.00'
    },
    {
      id: 6,
      username: 'Bridget Starwood',
      avatar: <img src={ images.ProPic } alt='' />,
      email: 'bridget@gmail.com',
      status: 'active',
      transaction: '$125.00'
    },
  ]
  return (
    <Container>
      <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />
    </Container>
  )
}
