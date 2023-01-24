import React from 'react';
import styled from 'styled-components';
import { Search } from '@mui/icons-material/';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';

// Component JSX
const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <Left>
          <Logo>Kenakata</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder='search' />
            <Search
              style={{
                color: 'gray',
                fontSize: 16,
                // color: 'gray',
                // fontSize: '1.25rem',
                // cursor: 'pointer',
                // flex: 2,
                // paddingLeft: '.125rem',
              }}
            />
          </SearchContainer>
          <Language>EN</Language>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </NavWrapper>
    </NavContainer>
  );
};

// Styled Component

const NavContainer = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const NavWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0px' })}
`;

const Language = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  /* width: 55%;
  height: 1.5rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid lightgray; */
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  /* border: none;
  flex: 8;
  height: 1.375rem;
  padding-left: 0.5rem;
  ${mobile({ width: '50px' })} */
  border: none;
  outline: none;
  ${mobile({ width: '50px' })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '1.5rem' })}
`;
const Left = styled.div`
  flex: 1;
  ${mobile({ fontSize: '1.5rem', marginLeft: '.5rem' })}
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 0.875rem;
  cursor: pointer;
  margin-right: 1.5rem;
  ${mobile({ fontSize: '.75rem', margineLeft: '.625rem' })}
`;
export default Navbar;
