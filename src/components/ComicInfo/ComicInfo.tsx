import { FC } from "react";
import { Comic } from "../../types/comic";
import styled from "styled-components";
import * as media from "../../theme/media-queries";
import Text from "../Text/Text";
import { weight } from "../../theme/typography";

export interface PropTypes {
  comic: Comic;
}

const RELEASE_DATE = "onsaleDate";

const ComicInfo: FC<PropTypes> = ({ comic }) => {
  const releaseDate = comic.dates.find((date) => date.type === RELEASE_DATE);
  const releaseYear = releaseDate && new Date(releaseDate?.date).getFullYear();

  return (
    <Container>
      <Image
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <ComicTitle level="p1">{comic.title}</ComicTitle>
      {releaseYear && <Text level="p3">{releaseYear}</Text>}
    </Container>
  );
};
export default ComicInfo;

const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 17.9rem;

  ${media.smallMedia} {
    width: 16.9rem;
  }
  ${media.lteExtraSmallMedia} {
    width: 16.4rem;
  }
`;

const Image = styled.img`
  object-fit: contain;
  height: 26.9rem;

  ${media.smallMedia} {
    height: 25.3rem;
  }
  ${media.lteExtraSmallMedia} {
    height: 24.8rem;
  }
`;

const ComicTitle = styled(Text)`
  font-weight: ${weight.medium};

  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-8);
`;
