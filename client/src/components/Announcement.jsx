import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .8rem;
  font-weight: 600;
`;

export const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over $50
    </Container>
  );
};
