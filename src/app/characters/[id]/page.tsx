"use client";
import { fetchMarvelData } from "@/api/request";
import CharacterInfo from "@/components/CharacterInfo/CharacterInfo";
import Comics from "@/components/Comics/Comics";
import Spinner from "@/components/Spinner/Spinner";
import { Character } from "@/types/character";
import { Comic } from "@/types/comic";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const CharacterPage = () => {
  const { id } = useParams();
  const characterId = Number(id);
  const [characterData, setCharacterData] = useState<Character>();
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const getCharacterData = useCallback(async (pCharacterId: number) => {
    const data = await fetchMarvelData(`/characters/${pCharacterId}`);
    return data?.data?.results[0];
  }, []);

  const getCharacterComics = useCallback(async (pCharacterId: number) => {
    const data = await fetchMarvelData(`/characters/${pCharacterId}/comics`);
    return data?.data?.results;
  }, []);

  const loadCharacterData = useCallback(
    async (pCharacterId: number) => {
      setLoading(true);
      const data = await getCharacterData(pCharacterId);
      setCharacterData(data);
      setLoading(false);
    },
    [getCharacterData]
  );

  const loadComics = useCallback(
    async (pCharacterId: number) => {
      setLoading(true);
      const data = await getCharacterComics(pCharacterId);
      setComics(data);
      setLoading(false);
    },
    [getCharacterComics]
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    loadCharacterData(characterId);
    loadComics(characterId);
  }, [characterId, loadCharacterData, loadComics]);

  if (!isMounted) return null; // Renderiza solo en el cliente

  return (
    <Container>
      {!!characterData && !loading ? (
        <>
          <CharacterInfo character={characterData} />
          <Comics comics={comics} />
        </>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </Container>
  );
};

export default CharacterPage;

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding: var(--spacing-none);
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
