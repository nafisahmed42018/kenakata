import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
  const path = useLocation();
  const category = path.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = e => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  // console.log(filters);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products : </FilterText>
          <Select defaultValue='color' name='color' onChange={handleFilters}>
            <Option value='color' disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>black</Option>
            <Option>khaki</Option>
          </Select>
          <Select defaultValue='size' name='size' onChange={handleFilters}>
            <Option value='size' disabled>
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
          <Select defaultValue='newest' onChange={e => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='price-asc'>Price (asc)</Option>
            <Option value='price-desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
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
