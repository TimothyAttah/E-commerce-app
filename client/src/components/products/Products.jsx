/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { popularProducts } from '../helper/helper';
import { Product } from './Product';

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `/products?category=${cat}` : '/products'
        );
        console.log('products >>>>>>', res.data.products);
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat
      && setFilteredProducts(
        products.filter( item => Object.entries( filters ).every( ( [ key, value ] ) => item[ key ].includes( value ) ) )
      );
  }, [products,  cat, filters, ] );

  useEffect( () => {
    if ( sort === 'newest' ) {
      setFilteredProducts( prev => [ ...prev ].sort( ( a, b ) => a.createdAt - b.createdAt ));
    } else if ( sort === 'asc' ) {
      setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [ sort ] );
  return (
    <Container>
      
      {cat
        ? filteredProducts.map(item => <Product key={item.id} item={item} />)
        : products?.map(item => <Product key={item.id} item={item} />)}
      

      {/* {popularProducts.map(item => (
        <Product key={item._id} item={item} />
      ))} */}
    </Container>
  );
};
