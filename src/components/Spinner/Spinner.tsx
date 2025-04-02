"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";

// Animación de rotación
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Contenedor que rota
const SpinnerContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 2s linear infinite;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Image
        src="/shield.svg"
        alt="Captain America Shield"
        width={100}
        height={100}
        priority
      />
    </SpinnerContainer>
  );
};

export default Spinner;
