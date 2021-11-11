import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
// export const Container = styled.div`

// `;

export const WidgetSmall = () => {
  return (
    <Container>
      small
    </Container>
  )
}
