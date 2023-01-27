import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import { publicReq } from '../requestMethods';

const Product = () => {
  //Info about single product
  const path = useLocation();
  const id = path.pathname.split('/')[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicReq.get(`products/find/_${id}`);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>৳ 6000 /-</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color.map(c => (
                <FilterColor color={c} key={c} />
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size.map(s => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
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
  ${mobile({ padding: '.625rem', flexDirection: 'column' })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  ${mobile({ height: '50vh' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0rem 3.125rem;
  ${mobile({ padding: '.625rem' })}
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
  ${mobile({ width: '100%' })}
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
  ${mobile({ width: '100%' })}
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
