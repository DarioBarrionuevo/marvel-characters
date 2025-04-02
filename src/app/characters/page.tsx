"use client";

import { fetchMarvelData } from "@/api/request";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Character } from "@/types/character";
import { useEffect, useState } from "react";
import styled from "styled-components";
import * as media from "../../theme/media-queries";
import Spinner from "@/components/Spinner/Spinner";

function Characters() {
  const [characterName, setCharacterName] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  const loadCharacters = async (nameStartsWith = "") => {
    setLoading(true);
    await getCharacters(nameStartsWith)
      .then((data) => {
        setCharacters(data.characters);
        setTotal(data.total);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getCharacters = async (characterName: string) => {
    const data = await fetchMarvelData("/characters", characterName);

    return {
      total: data.data?.total,
      characters: data.data?.results,
    };
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    loadCharacters();
  }, []);

  if (!isMounted) return null; // Renderiza solo en el cliente

  const handleSearch = (value: string) => {
    setCharacterName(value);
    loadCharacters(value);
  };

  return (
    <Container>
      <SearchBar value={characterName} onChange={handleSearch} count={total} />

      {loading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <StyledGrid>
          {characters?.map((character: Character) => (
            <div key={character.id}>{character.name}</div>
          ))}
        </StyledGrid>
      )}
    </Container>
  );
}

export default Characters;

const Container = styled.div`
  position: relative;

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

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: var(--spacing-48);
  padding-top: var(--spacing-24);
  margin: var(--spacing-none);
  margin-top: var(--spacing-36);
  padding: var(--spacing-none);
  list-style: none;
`;
