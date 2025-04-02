import { createContext, useContext, useState, useEffect } from "react";
import { FavoritesContextType } from "./types";
import { Character } from "@/types/character";

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteCharacters");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = (character: Character) => {
    setFavorites([...favorites, character]);
  };

  const removeFavorite = (characterId: number) => {
    setFavorites(
      favorites.filter((character: Character) => character.id !== characterId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
