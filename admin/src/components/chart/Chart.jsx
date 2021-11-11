import React from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
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



export const Chart = ({title, data, activeData, grid}) => {
  return (
		<Container>
			<ChartTitle>{title}</ChartTitle>
			<ResponsiveContainer width='100%' aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey='name' stroke='#5550bd' />
					<Line type='monotone' dataKey={activeData} stroke='#5550bd' />
          <Tooltip />
          { grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' /> }
        </LineChart>
			</ResponsiveContainer>
		</Container>
	);
}
