"use client";

import Text from "@/components/Text/Text";
import { useFavorites } from "@/context/FavoritesContext";
import { Character } from "@/types/character";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import * as media from "../../theme/media-queries";
import CharacterDisplay from "@/components/Character/Character";
import SearchBar from "@/components/SearchBar/SearchBar";

function FavoritesPage() {
  const [characterName, setCharacterName] = useState("");
  const favoritesContext = useFavorites();
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  //Memoizamos favorites para evitar renders innecesarios
  const favorites = useMemo(
    () => favoritesContext?.favorites ?? [],
    [favoritesContext]
  );

  const handleSearch = (value: string) => {
    setCharacterName(value);
  };

  useEffect(() => {
    const search = characterName.toLowerCase();
    const filtered = favorites.filter((character: Character) =>
      character.name.toLowerCase().includes(search)
    );
    setFilteredCharacters(filtered);
  }, [favorites, characterName]);

  return (
    <Container>
      <CustomText level="h2">FAVORITES</CustomText>
      <SearchBar
        loading={false}
        value={characterName}
        onChange={handleSearch}
        count={filteredCharacters.length}
      />

      <StyledGrid>
        {filteredCharacters.map((character: Character) => (
          <CharacterDisplay key={character.id} character={character} />
        ))}
      </StyledGrid>
    </Container>
  );
}

export default FavoritesPage;

const Container = styled.main`
  padding: var(--spacing-48);
  padding-top: var(--spacing-60);

  ${media.extraSmallMedia} {
    padding: var(--spacing-12);
    margin-top: var(--spacing-24);
  }
`;

const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.9rem, 1fr));
  gap: var(--spacing-16);

  margin: var(--spacing-none);
  margin-top: var(--spacing-36);
  padding: var(--spacing-none);
  list-style: none;

  ${media.lteSmallMedia} {
    grid-template-columns: repeat(auto-fill, minmax(17.2rem, 1fr));
  }
`;

const CustomText = styled(Text)`
  text-transform: uppercase;
  margin-bottom: var(--spacing-36);
`;
