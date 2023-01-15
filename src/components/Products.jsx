import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { popularProducts } from '../data';

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Products;
