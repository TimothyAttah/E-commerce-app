import React from 'react';
import styled from 'styled-components';
import { FeaturedInfo } from '../../components/featuredInfo/FeaturedInfo';

export const Container = styled.div`
  flex: 4;
`;
// export const Container = styled.div`

// `;

export const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
    </Container>
  )
}
