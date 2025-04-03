"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Text from "../Text/Text";
import { Character } from "../../types/character";
import styled from "styled-components";
import * as media from "../../theme/media-queries";
import typographyStyles from "../../theme/typography";
import Button from "../Button/Button";
import FavoriteEmpty from "../icons/FavoriteEmpty";
import FavoriteFull from "../icons/FavoriteFull";
import { useFavorites } from "../../context/FavoritesContext";

export interface PropTypes {
  character: Character;
}

const CharacterInfo: FC<PropTypes> = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoritesContext = useFavorites();

  if (!favoritesContext) {
    throw new Error("Context not working");
  }

  const { favorites, addFavorite, removeFavorite } = favoritesContext;

  const checkCharacterIsFavorite = useCallback(() => {
    setIsFavorite(
      favorites.some((favCharacter) => favCharacter.id === character.id)
    );
  }, [favorites, character]);

  const toggleFavoriteCharacter = () => {
    if (isFavorite) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    checkCharacterIsFavorite();
  }, [checkCharacterIsFavorite]);

  return (
    <StyledHeader>
      <Container>
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <Resume>
          <Wrapper>
            <StyledHeading level="h1">{character.name}</StyledHeading>
            <Button
              onClick={toggleFavoriteCharacter}
              icon={() =>
                isFavorite ? (
                  <FavoriteFull width={24} height={21.68} />
                ) : (
                  <FavoriteEmpty width={24} height={21.68} />
                )
              }
            />
          </Wrapper>
          <Text level="p1">{character.description}</Text>
        </Resume>
      </Container>
    </StyledHeader>
  );
};

export default CharacterInfo;

const StyledHeader = styled.header`
  display: flex;
  width: 80%;
  position: relative;
  overflow: hidden;
  background-color: var(--colors-black);
  margin: 0 auto;

  ${media.gteMediumMedia} {
    justify-content: center;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: var(--colors-white);

    width: 3.6rem;
    height: 3.6rem;
    right: -1.8rem;
    bottom: -1.8rem;
    transform: rotate(45deg);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${media.gteMediumMedia} {
    max-width: 96rem;
  }
  ${media.gteSmallMedia} {
    gap: var(--spacing-48);
  }
  ${media.smallMedia} {
    padding-right: var(--spacing-48);
  }
  ${media.lteExtraSmallMedia} {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 32rem;
  height: 32rem;
  object-fit: cover;

  ${media.smallMedia} {
    width: 27.8rem;
    height: 27.8rem;
  }
  ${media.lteExtraSmallMedia} {
    width: 100%;
    height: auto;
  }
`;

const Resume = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
  width: 100%;
  box-sizing: border-box;
  color: var(--colors-white);

  ${media.lteExtraSmallMedia} {
    padding: var(--spacing-24) var(--spacing-16) var(--spacing-48);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-16);
`;

const StyledHeading = styled(Text)`
  text-transform: uppercase;

  ${media.lteSmallMedia} {
    ${typographyStyles.h2};
  }
`;
