"use client"; 

import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: var(--footer-bg-color, black);
  color: var(--footer-text-color, white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 14px;
  font-family: Arial, sans-serif;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const Footer = () => {
  return <FooterWrapper>Data provided by Marvel. © 2014 Marvel</FooterWrapper>;
};

export default Footer;
