"use client";
import { fetchMarvelData } from "@/api/request";
import Spinner from "@/components/Spinner/Spinner";
import { Character } from "@/types/character";
import { Comic } from "@/types/comic";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CharacterPage = () => {
  const { id }: number = useParams();
  const [characterData, setCharacterData] = useState<Character>();
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(false);

  const getCharacterData = async (characterId: number) => {
    const data = await fetchMarvelData(`/characters/${characterId}`);
    console.log("🚀 ~ getCharacterData ~ data:", data);
    return data?.data?.results[0];
  };

  const getCharacterComics = async (characterId: number) => {
    const data = await fetchMarvelData(`/characters/${characterId}/comics`);
    return data?.data?.results;
  };
  const loadCharacterData = async (characterId: number) => {
    setLoading(true);
    await getCharacterData(characterId).then((data) => {
      setCharacterData(data);
      setLoading(false);
    });
  };

  const loadComics = async (characterId: number) => {
    setLoading(true);
    await getCharacterComics(characterId).then((data: Comic[]) => {
      setComics(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadCharacterData(id);
    loadComics(id);
  }, [id]);
  return (
    <Container>
      {!!characterData && !loading ? (
        <>
        <p>id</p>
          {/* <CharacterInfo character={characterData} /> */}
          {/* // <ComicsList comics={comics} /> */}
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
