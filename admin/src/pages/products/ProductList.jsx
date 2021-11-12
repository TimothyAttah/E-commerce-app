import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DeleteOutline, EditOutlined } from '@material-ui/icons';
import { productRows } from '../../components/dummyData';


export const Container = styled.div`
  flex: 4;
`;

export const ProductLists = styled.div`
	display: flex;
	align-items: center;
	.MuiAvatar-root {
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;
export const ProductsListButton = styled.button`
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
		`}
`;
// export const Container = styled.div`

// `;

export const ProductList = () => {
   const [data, setData] = useState(productRows);

		const handleDelete = id => {
			setData(data.filter(item => item.id !== id));
    };
  
   const columns = [
			{ field: 'id', headerName: 'ID', width: 100 },
			{
				field: 'product',
				headerName: 'Product',
				width: 200,
				renderCell: params => {
					return (
						<ProductLists>
							<Avatar>{params.row.img}</Avatar>
							{params.row.name}
						</ProductLists>
					);
				},
			},
			{ field: 'stock', headerName: 'Stock', width: 200 },
			{ field: 'status', headerName: 'Status', width: 120 },
			{ field: 'price', headerName: 'Price Volume', width: 220 },
			{
				field: 'action',
				headerName: 'Action',
				width: 150,
				renderCell: params => {
					return (
						<>
							<Link to={`/product/edit/${params.row.id}`}>
								<ProductsListButton edit>
									<EditOutlined />
								</ProductsListButton>
							</Link>
							<ProductsListButton onClick={() => handleDelete(params.row.id)}>
								<DeleteOutline />
							</ProductsListButton>
						</>
					);
				},
			},
		];

  return (
		<Container>
			<DataGrid
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={5}
				checkboxSelection
			/>
		</Container>
	);
}
