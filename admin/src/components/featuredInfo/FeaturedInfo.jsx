import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

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
	
`;
export const FeaturedMoneyContainer = styled.div`
	margin: 10px 0;
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
		font-size: 1.3rem;
    color: red;
	}
  .featuredIcon{
    color: green;
  }
`;

export const FeaturedInfo = () => {
  return (
    <Container>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,415</FeaturedMoney>
          <FeaturedMoneyRate>-11.4 <ArrowDownward /></FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,415</FeaturedMoney>
          <FeaturedMoneyRate>-1.4 <ArrowDownward /></FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,255</FeaturedMoney>
          <FeaturedMoneyRate>+2.4 <ArrowUpward className="featuredIcon" /></FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
      </FeaturedItem>
    </Container>
  )
}
