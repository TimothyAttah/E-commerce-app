import React from 'react';
import styled from 'styled-components';
import { Chart } from '../../components/chart/Chart';
import { FeaturedInfo } from '../../components/featuredInfo/FeaturedInfo';
import { userData } from '../../components/dummyData';
import { WidgetLarge } from '../../components/widgets/widgetLarge/WidgetLarge';
import { WidgetSmall } from '../../components/widgets/widgetSmall/WidgetSmall';


export const Container = styled.div`
  flex: 4;
`;
export const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;
// export const Container = styled.div`

// `; 

export const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={ userData } title='User Analytics' grid activeData="Active user" />
      <HomeWidgets>
        <WidgetSmall />
        <WidgetLarge />
      </HomeWidgets>
    </Container>
  )
}
