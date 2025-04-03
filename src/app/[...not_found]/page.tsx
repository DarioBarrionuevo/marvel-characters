"use client";
import styled from "styled-components";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container>
      <Title>Wow! Page not found</Title>
      <Message>You can`t seem to find your hero! 🦸‍♂️</Message>

      <Redirect>
        Back to <StyledLink href="/">main page</StyledLink>
      </Redirect>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #ec1d24; // Rojo de Marvel
  font-weight: bold;
`;

const Message = styled.p`
  font-size: 20px;
  color: #333;
  margin-top: 10px;
`;

const Redirect = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  color: #ec1d24;
  text-decoration: none;
  font-weight: bold;
`;
export default NotFound;
