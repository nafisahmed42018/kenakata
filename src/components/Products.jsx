import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
// import { popularProducts } from '../data';
import axios from 'axios';

const Products = ({ category, filters, sort, _id }) => {
  // Product items of the same category
  // console.log({ category, filters, sort });

  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:3001/api/products?category=${category}`
            : 'http://localhost:3001/api/products'
        );
        console.log(res);
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter(item =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'price-asc') {
      setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === 'price-desc') {
      setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <Container>
      {category
        ? filteredProducts.map(item => (
            <ProductItem item={item} key={item._id} />
          ))
        : products
            .slice(0, 8)
            .map(item => <ProductItem item={item} key={item._id} />)}
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
