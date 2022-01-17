import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { userRequest } from '../../requestMethods';

export const Container = styled.div`
	width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const FeaturedItem = styled.div`
	flex: 1;
	margin: 0px 20px;
	padding: 30px;
	border-radius: 10px;
	cursor: pointer;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const FeaturedTitle = styled.span`
	font-size: 1.4rem;
`;
export const FeaturedSubTitle = styled.span`
	font-size: 1.1rem;
  color: var(--gray);
`;
export const FeaturedMoneyContainer = styled.div`
	margin: 15px 0;
  display: flex;
  align-items: center;
`;
export const FeaturedMoney = styled.span`
	font-size: 1.8rem;
  font-weight: 600;
`;
export const FeaturedMoneyRate = styled.span`
	display: flex;
	align-items: center;
	margin-left: 20px;
	.MuiSvgIcon-root {
		margin-left: 5px;
		font-size: 1rem;
    color: var(--red);
	}
  .featuredIcon{
    color: var(--green);
  }
`;

export const FeaturedInfo = () => {
  const [ income, setIncome ] = useState( [] );
  const [ incomePercentage, setIncomePercentage ] = useState( 0 );

  useEffect( () => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get( '/orders/income' )
        console.log( 'income >>>>', res.data );
        setIncome( res.data )
        setIncomePercentage((res.data[1].total * 100) / res.data[0].total - 100)
        // setIncomePercentage( ( res.data[ 1 ].total * 100 ) / res.data[ 0 ].total - 100 );
      } catch (err) {
        console.log(err.message);
      }
    }
    getIncome();
  }, [] )
  
  console.log('income>>>>>>', incomePercentage);

  return (
		<Container>
			<FeaturedItem>
				<FeaturedTitle>Revenue</FeaturedTitle>
				<FeaturedMoneyContainer>
					<FeaturedMoney>${income[1]?.total}</FeaturedMoney>
					<FeaturedMoneyRate>
						%{Math.floor(incomePercentage)}
						{incomePercentage < 0 ? (
							<ArrowDownward />
						) : (
							<ArrowUpward className='featuredIcon' />
						)}
					</FeaturedMoneyRate>
				</FeaturedMoneyContainer>
				<FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
			</FeaturedItem>
			<FeaturedItem>
				<FeaturedTitle>Sales</FeaturedTitle>
				<FeaturedMoneyContainer>
					<FeaturedMoney>$4,415</FeaturedMoney>
					<FeaturedMoneyRate>
						-1.4 <ArrowDownward />
					</FeaturedMoneyRate>
				</FeaturedMoneyContainer>
				<FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
			</FeaturedItem>
			<FeaturedItem>
				<FeaturedTitle>Cost</FeaturedTitle>
				<FeaturedMoneyContainer>
					<FeaturedMoney>$2,255</FeaturedMoney>
					<FeaturedMoneyRate>
						+2.4 <ArrowUpward className='featuredIcon' />
					</FeaturedMoneyRate>
				</FeaturedMoneyContainer>
				<FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
			</FeaturedItem>
		</Container>
	);
}
