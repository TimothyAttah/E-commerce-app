import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DeleteOutline, EditOutlined } from '@material-ui/icons';
import { productRows } from '../../components/dummyData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/apiCall';


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

export const ProductList = () => {
	const dispatch = useDispatch();
   const [data, setData] = useState(productRows);
	const products = useSelector( state => state.product.products )
	
	console.log('This is products', products);
	
	useEffect( () => {
		getProducts( dispatch )
	}, [ dispatch ] );

		const handleDelete = id => {
			setData(data.filter(item => item.id !== id));
    };
  
   const columns = [
			{ field: '_id', headerName: 'ID', width: 240 },
			{
				field: 'product',
				headerName: 'Product',
				width: 200,
				renderCell: params => {
					return (
						<ProductLists>
							{params.row.img ? (<Avatar>{params.row.img}</Avatar>) : <Avatar></Avatar>}
							
							{params.row.title}
						</ProductLists>
					);
				},
			},
			{ field: 'inStock', headerName: 'Stock', width: 200 },
			{ field: 'price', headerName: 'Price', width: 220 },
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
				rows={products}
				disableSelectionOnClick
				columns={ columns }
				getRowId={row=> row._id}
				pageSize={5}
				checkboxSelection
			/>
		</Container>
	);
}
