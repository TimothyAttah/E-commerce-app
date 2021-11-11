import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
	flex: 2;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;
// export const Container = styled.div`

// `;

export const WidgetLarge = () => {
  return (
    <Container>
      large
    </Container>
  );
};
