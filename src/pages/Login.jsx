import { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder='email'
            // onChange={e => setUsername(e.target.value)}
          />
          <Input
            placeholder='password'
            type='password'
            // onChange={e => setPassword(e.target.value)}
          />
          <Button>LOGIN</Button>
          {<Error>Something went wrong...</Error>}
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 1.25rem;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.625rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.625rem 0;
  padding: 0.625rem;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 0.625rem 0.75rem;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 0.625rem 0rem;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

export default Login;
