import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src='https://www.pngall.com/wp-content/uploads/4/Black-Leather-Jacket-Transparent.png' />
        </ImageContainer>
        <InfoContainer>
          <Title>Leather Jacket</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            facere, nulla fugit, reiciendis perspiciatis sequi iusto ab facilis
            ducimus quaerat doloribus cumque possimus maiores aut recusandae.
            Iure perferendis explicabo dolores.
          </Description>
          <Price>৳ 6000 /-</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='#2e1503' />
              <FilterColor color='#795c34' />
              <FilterColor color='#000000' />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 3.125rem;
  display: flex;
  ${mobile({ padding: ".625rem", flexDirection: "column" })}

`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  ${mobile({ height: "50vh" })}

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0rem 3.125rem;
  ${mobile({ padding: ".625rem" })}

`;

const Title = styled.h1`
  font-weight: 300;
`;

const Description = styled.p`
  margin: 1.25rem 0rem;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 1.875rem;
`;
const FilterContainer = styled.div`
  margin: 1.25rem 0rem;
  width: 60%;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 200;
`;
const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 0.625rem;
  border: 1.5px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 0.5rem 0.625rem;
  border: 2px solid teal;
  background-color: transparent;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

export default Product;
