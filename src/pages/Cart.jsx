import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Shopping Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://www.pngall.com/wp-content/uploads/4/Black-Leather-Jacket-Transparent.png' />
                <Details>
                  <ProductName>
                    <b>Product : </b> Leather Jacket
                  </ProductName>
                  <ProductID>
                    <b>ID : </b> 123456879
                  </ProductID>
                  <ProductColor color='black' />
                  <ProductSize>
                    <b>Size : </b>L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>৳ 6000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://www.pngall.com/wp-content/uploads/4/Black-Leather-Jacket-Transparent.png' />
                <Details>
                  <ProductName>
                    <b>Product : </b> Leather Jacket
                  </ProductName>
                  <ProductID>
                    <b>ID : </b> 123456879
                  </ProductID>
                  <ProductColor color='black' />
                  <ProductSize>
                    <b>Size : </b>L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>৳ 6000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <Hr />
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>৳ 6000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping Cost</SummaryItemText>
              <SummaryItemPrice>৳ 150</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>৳ -150</SummaryItemPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>৳ 6000</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '.625rem' })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0rem 0.625rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 1.5rem;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;

  border-radius: 10px;
  padding: 1.25rem;
  height: 21rem;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const ProductAmount = styled.div`
  font-size: 1rem;
  margin: 5px;
  ${mobile({ margin: '.3125rem .9375rem' })}
`;
const ProductPrice = styled.div`
  font-size: 1.125rem;
  font-weight: 200;
  ${mobile({ marginBottom: '1.25rem' })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 0.875rem 0rem;
`;

const SummaryTitle = styled.h2`
  font-weight: 600;
`;

const SummaryItem = styled.div`
  margin: 1.625rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${props => props.type === 'total' && '600'};
  font-size: ${props => props.type === 'total' && '1.125rem'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  padding: 0.625rem;
  background-color: black;
  color: white;
`;

export default Cart;
