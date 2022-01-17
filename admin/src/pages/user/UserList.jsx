import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import styled, { css } from 'styled-components';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DeleteOutline, EditOutlined } from '@material-ui/icons';
import { userRows } from '../../components/dummyData';

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
      display: flex;
      align-items: center;
		`}
`;

export const UserList = () => {
  const [ data, setData ] = useState( userRows );

  const handleDelete = id => {
		setData(data.filter(item => item.id !== id))
	};

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
					<>
						<Link to={`/user/edit/${params.row.id}`}>
							<UserListButton edit>	<EditOutlined /></UserListButton>
						</Link>
						<UserListButton onClick={() => handleDelete(params.row.id)}>
							<DeleteOutline />
						</UserListButton>
					</>
				);
    } },
  ]


  return (
    <Container>
      <DataGrid
        rows={ data }
        disableSelectionOnClick
        columns={ columns }
        pageSize={ 5 }
        checkboxSelection
      />
    </Container>
  )
}
