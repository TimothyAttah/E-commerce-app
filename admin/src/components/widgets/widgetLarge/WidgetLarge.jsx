import { Avatar } from '@material-ui/core';
import React from 'react';
import styled, { css } from 'styled-components';
import { images } from '../../images';

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
	${props =>
		props.Approved &&
		css`
			background-color: #e5faf2;
			color: #3bb077;
		`}
	${props =>
		props.Declined &&
		css`
			background-color: #fff0f1;
			color: #d95087;
		`}
  ${props =>
		props.Pending &&
		css`
			background-color: #ebf1fe;
			color: #2a7ade;
		`}
`;

export const WidgetLarge = () => {
  // const Button = ( { type } ) => {
  //   return <WidgetButton props={type}>{ type }</WidgetButton>
  // }
  return (
		<Container>
			<WidgetTitle>Latest transactions</WidgetTitle>
			<WidgetTable>
				<WidgetTableRow>
					<WidgetTableHeader>Customer</WidgetTableHeader>
					<WidgetTableHeader>Date</WidgetTableHeader>
					<WidgetTableHeader>Amount</WidgetTableHeader>
					<WidgetTableHeader>Status</WidgetTableHeader>
				</WidgetTableRow>
				<WidgetTableRow>
					<WidgetTableDataUser>
						<Avatar>
							<img src={images.ProPic} alt='' />
						</Avatar>
						<span>Susan Carol</span>
					</WidgetTableDataUser>
					<WidgetTableDataDate>2 Jun 2021</WidgetTableDataDate>
					<WidgetTableDataAmount>$122.00</WidgetTableDataAmount>
					<WidgetTableDataStatus>
						<WidgetButton Approved>Approved</WidgetButton>
					</WidgetTableDataStatus>
				</WidgetTableRow>
				<WidgetTableRow>
					<WidgetTableDataUser>
						<Avatar>
							<img src={images.ProPic} alt='' />
						</Avatar>
						<span>Susan Carol</span>
					</WidgetTableDataUser>
					<WidgetTableDataDate>2 Jun 2021</WidgetTableDataDate>
					<WidgetTableDataAmount>$122.00</WidgetTableDataAmount>
					<WidgetTableDataStatus>
						{/* <Button type="Declined" /> */}
						<WidgetButton Declined>Declined</WidgetButton>
					</WidgetTableDataStatus>
				</WidgetTableRow>
				<WidgetTableRow>
					<WidgetTableDataUser>
						<Avatar>
							<img src={images.ProPic} alt='' />
						</Avatar>
						<span>Susan Carol</span>
					</WidgetTableDataUser>
					<WidgetTableDataDate>2 Jun 2021</WidgetTableDataDate>
					<WidgetTableDataAmount>$122.00</WidgetTableDataAmount>
					<WidgetTableDataStatus>
						<WidgetButton Pending>Pending</WidgetButton>
					</WidgetTableDataStatus>
				</WidgetTableRow>
				<WidgetTableRow>
					<WidgetTableDataUser>
						<Avatar>
							<img src={images.ProPic} alt='' />
						</Avatar>
						<span>Susan Carol</span>
					</WidgetTableDataUser>
					<WidgetTableDataDate>2 Jun 2021</WidgetTableDataDate>
					<WidgetTableDataAmount>$122.00</WidgetTableDataAmount>
					<WidgetTableDataStatus>
						<WidgetButton Approved>Approved</WidgetButton>
					</WidgetTableDataStatus>
				</WidgetTableRow>
			</WidgetTable>
		</Container>
	);
};
