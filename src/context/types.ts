import { Character } from "@/types/character";

export interface FavoritesContextType {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (characterId: number) => void;
}
