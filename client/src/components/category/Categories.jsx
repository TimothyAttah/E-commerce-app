import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

import { categories } from '../helper/helper';
import { CategoriesItem } from './CategoriesItem';

const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	${mobile({
    padding: '0px',
    flexDirection: 'column'
  })}
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoriesItem key={item.id} item={item} />
      ))}
    </Container>
  );
};
