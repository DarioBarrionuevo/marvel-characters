"use client";
import styled from "styled-components";
import MarvelLogo from "./MarvelLogo";
import FavoritesIcon from "./FavoritesIcon";

const HeaderWrapper = styled.header`
  background-color: var(--header-bg-color, black);
  color: var(--header-text-color, white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  font-size: 14px;
  font-family: Arial, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;
const HeaderComponent = styled.div`
  margin-left: 50px;
  margin-right: 70px;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderComponent>
        <MarvelLogo />
      </HeaderComponent>
      <HeaderComponent>
        <FavoritesIcon />
      </HeaderComponent>
    </HeaderWrapper>
  );
}
