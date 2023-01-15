import React from 'react';
import styled from 'styled-components';
import { Search } from '@mui/icons-material/';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
            <Input />
            <Search
              style={{
                color: 'gray',
                fontSize: '1.25rem',
                cursor: 'pointer',
                flex: 2,
                paddingLeft: '.125rem',
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
`;

const NavWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Language = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  width: 55%;
  height: 25px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  height: 24px;
  padding-left: 0.5rem;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Left = styled.div`
  flex: 1;
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
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 0.875rem;
  cursor: pointer;
  margin-right: 1.5rem;
`;
export default Navbar;
