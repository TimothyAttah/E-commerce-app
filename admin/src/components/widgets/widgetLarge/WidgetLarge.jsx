import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { format } from 'timeago.js';
import { userRequest } from '../../../requestMethods';

export const Container = styled.div`
	flex: 2;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

export const WidgetTitle = styled.h3`
	font-size: 1.5rem;
	font-weight: 600;
`;
export const WidgetTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
export const WidgetTableRow = styled.tr`

`;
export const WidgetTableHeader = styled.th`
  text-align: left;
`;
export const WidgetTableDataUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
  span{
    margin-left: 10px;
  }
`;
export const WidgetTableDataDate = styled.td`
  font-weight: 300;
`;
export const WidgetTableDataAmount = styled.td`
  font-weight: 300;
`;
export const WidgetTableDataStatus = styled.td`

`;
export const WidgetButton = styled.button`
	padding: 5px;
	border-radius: 5px;
	${props =>
		props.status === 'approved' &&
		css`
			background-color: #e5faf2;
			color: #3bb077;
		`}
	${props =>
		props.status === 'declined' &&
		css`
			background-color: #fff0f1;
			color: #d95087;
		`}
  ${props =>
		props.status === 'pending' &&
		css`
			background-color: #ebf1fe;
			color: #2a7ade;
		`}
`;

export const WidgetLarge = () => {
  const [orders, setOrders] = useState([]);

	useEffect(() => {
		const getOrders = async () => {
			try {
				const res = await userRequest.get('orders/?new=true');
				setOrders(res.data);
			} catch (err) {
				console.log(err.message);
			}
		};
		getOrders();
	}, []);
  return (
		<Container>
			<WidgetTitle>Latest transactions</WidgetTitle>
			<WidgetTable>
				<WidgetTableRow>
					<WidgetTableHeader>Customer Id</WidgetTableHeader>
					<WidgetTableHeader>Date</WidgetTableHeader>
					<WidgetTableHeader>Amount</WidgetTableHeader>
					<WidgetTableHeader>Status</WidgetTableHeader>
				</WidgetTableRow>
				{orders.map(order => (
					<WidgetTableRow key={order._id}>
						<WidgetTableDataUser>
							<span>{order?.userId}</span>
						</WidgetTableDataUser>
						<WidgetTableDataDate>{format(order?.createdAt)}</WidgetTableDataDate>
						<WidgetTableDataAmount>${order?.amount}</WidgetTableDataAmount>
						<WidgetTableDataStatus>
							<WidgetButton status={order?.status}>{order?.status}</WidgetButton>
						</WidgetTableDataStatus>
					</WidgetTableRow>
				))}
			</WidgetTable>
		</Container>
	);
};
