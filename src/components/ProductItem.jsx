import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductItem = ({ item }) => {
  // Individual Product item container for the products
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to={`/products/${item._id}`}
          >
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 0.3125rem;
  min-width: 17.5rem;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.625rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.25);
  }
`;

export default ProductItem;
