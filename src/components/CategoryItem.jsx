import React from 'react';
import styled from 'styled-components';

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>View Items</Button>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  margin: 0.25rem;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  text-shadow: 1px 1px 5px whitesmoke;
  margin-bottom: 1.25rem;
`;
const Button = styled.button`
  border: none;
  padding: 0.5rem 0.8rem;
  background-color: white;
  color: gray;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: black;
  }
`;

export default CategoryItem;
