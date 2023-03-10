import { Send } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates for your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  background-color: #f5fbfd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 4.375rem;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

export default Newsletter;
