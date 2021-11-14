import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Chart } from '../../components/chart/Chart';
import { FeaturedInfo } from '../../components/featuredInfo/FeaturedInfo';
import { userData } from '../../components/dummyData';
import { WidgetLarge } from '../../components/widgets/widgetLarge/WidgetLarge';
import { WidgetSmall } from '../../components/widgets/widgetSmall/WidgetSmall';
import { userRequest } from '../../requestMethods';


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
  const [ userStats, setUserStats ] = useState( [] );

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ], []
  )

  useEffect( () => {
    const getStats = async () => {
      try {
        const res = await userRequest.get( '/users/stats' )
        res.data.map( item => {
          return setUserStats(prev => [
						...prev,
						{ name: MONTHS[item._id - 1], 'Active User': item?.total },
					]);
        })
      } catch (err) {
        console.log(err.message);
      }
    }
    getStats()
  }, [ MONTHS ] )
  
  console.log('userStats >>>> ',userStats);

  return (
    <Container>
      <FeaturedInfo />
      <Chart data={ userStats } title='User Analytics' grid activeData="Active user" />
      <HomeWidgets>
        <WidgetSmall />
        <WidgetLarge />
      </HomeWidgets>
    </Container>
  )
}
