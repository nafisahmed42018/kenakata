import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products : </FilterText>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>Casual</Option>
            <Option>Party</Option>
            <Option>Wedding</Option>
            <Option>Formal</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XLLL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products : </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

const Container = styled.div``;
const Title = styled.h1`
  margin: 1.25rem;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 1.25rem;
  ${mobile({ width: '0rem 1.25rem', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 0.5rem;
  ${mobile({ marginRight: '0rem' })}
`;

const Select = styled.select`
  padding: 0.625rem;
  margin-right: 0.5rem;
  ${mobile({ margin: '.625rem 0rem' })}
`;
const Option = styled.option``;

export default ProductList;
