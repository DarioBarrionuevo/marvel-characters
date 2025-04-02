"use client";
import FavoriteEmpty from "@/app/components/icons/FavoriteEmpty";
import FavoriteFull from "@/app/components/icons/FavoriteFull";
import styled from "styled-components";
import Link from "next/link";

const StyledComponent = styled.div`
  width: 8px;
  height: 19px;

  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  margin-left: 10px;
  color: #ffffff;
  flex: none;
  order: 2;
  flex-grow: 0;
  cursor: default;
`;

const FavoritesIcon = () => {
  const favoritesSelected = true;
  const totalFavorites = 2;
  return (
    <>
      <Link href="/favorites" passHref aria-label="Ir a la página de favoritos">
        {favoritesSelected ? <FavoriteFull /> : <FavoriteEmpty />}
      </Link>
      <StyledComponent>{totalFavorites}</StyledComponent>
    </>
  );
};

export default FavoritesIcon;
