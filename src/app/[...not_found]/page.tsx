"use client";
import styled from "styled-components";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container>
      <Title>¡Vaya! Página no encontrada</Title>
      <Message>¡Parece que no puedes encontrar a tu héroe! 🦸‍♂️</Message>

      <Redirect>
        Vuelve a la <StyledLink href="/">página principal</StyledLink>
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
