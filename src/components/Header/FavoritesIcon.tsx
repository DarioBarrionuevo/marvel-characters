"use client";
import FavoriteEmpty from "@/components/icons/FavoriteEmpty";
import FavoriteFull from "@/components/icons/FavoriteFull";
import styled from "styled-components";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";

const FavoritesIcon = () => {
  const favoritesContext = useFavorites();
  if (!favoritesContext) return null;

  const { favorites } = favoritesContext;
  const favoritesCount = favorites.length;

  return (
    <>
      <Link href="/favorites" passHref aria-label="Ir a la página de favoritos">
        {favoritesCount > 0 ? <FavoriteFull /> : <FavoriteEmpty />}
      </Link>
      {favoritesCount > 0 && (
        <FavoritesCount aria-hidden={favoritesCount === 0}>
          {favoritesCount}
        </FavoritesCount>
      )}
    </>
  );
};

export default FavoritesIcon;

const FavoritesCount = styled.div`
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
