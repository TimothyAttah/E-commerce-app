import React from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
 
export const Container = styled.div`
	margin: 20px;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const ChartTitle = styled.h3`
  margin-bottom: 20px;
`;
// export const ChartTitle = styled.h3`

// `;

export const Chart = () => {
  const data = [
    {
      name: 'Jan',
      'Active user': 4000,
    },
    {
      name: 'Feb',
      'Active user': 3000,
    },
    {
      name: 'Mar',
      'Active user': 2245,
    },
    {
      name: 'Apr',
      'Active user': 1545,
    },
    {
      name: 'May',
      'Active user': 2160,
    },
    {
      name: 'Jun',
      'Active user': 3310,
    },
    {
      name: 'Jul',
      'Active user': 2330,
    },
    {
      name: 'Aug',
      'Active user': 2110,
    },
    {
      name: 'Sep',
      'Active user': 2340,
    },
    {
      name: 'Oct',
      'Active user': 2400,
    },
    {
      name: 'Nov',
      'Active user': 1500,
    },
    {
      name: 'Dec',
      'Active user': 1000,
    },
  ]
  return (
		<Container>
			<ChartTitle>User Analytics</ChartTitle>
			<ResponsiveContainer width='100%' aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey='name' stroke='#5550bd' />
					{/* <YAxis /> */}
					<Line type='monotone' dataKey='Active user' stroke='#5550bd' />
          <Tooltip />
          <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />
        </LineChart>
			</ResponsiveContainer>
		</Container>
	);
}
