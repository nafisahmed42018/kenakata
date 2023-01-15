import React from 'react';
import styled from 'styled-components';

const Announcement = () => {
  return <Container>Free Shipping on Orders Over ৳500</Container>;
};

const Container = styled.div`
  height: 1.875rem;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
`;

export default Announcement;
