"use client";
import FavoriteEmpty from "@/app/components/icons/favoriteEmpty";
import FavoriteFull from "@/app/components/icons/favoriteFull";
import styled from "styled-components";

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
`;

const FavoritesIcon = () => {
  const favoritesSelected = true;
  const totalFavorites = 2;
  return (
    <>
      {favoritesSelected ? <FavoriteFull /> : <FavoriteEmpty />}
      <StyledComponent>{totalFavorites}</StyledComponent>
    </>
  );
};

export default FavoritesIcon;
