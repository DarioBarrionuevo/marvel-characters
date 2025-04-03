import { Comic } from "@/types/comic";
import * as media from "../../theme/media-queries";
import styled from "styled-components";
import Text from "../Text/Text";
import { FC } from "react";
import typographyStyles from "@/theme/typography";
import ComicInfo from "../ComicInfo/ComicInfo";

export interface PropTypes {
  comics: Comic[];
}
const Comics: FC<PropTypes> = ({ comics }) => {
  return (
    <StyledSection>
      <Container>
        <StyledHeading level="h2">Comics</StyledHeading>
        <List>
          {comics.map((comic: Comic) => (
            <ComicInfo key={comic.id} comic={comic} />
          ))}
        </List>
      </Container>
    </StyledSection>
  );
};

export default Comics;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding: var(--spacing-48) var(--spacing-none) var(--spacing-24);
`;

const Container = styled.div`
  width: 1000%;

  ::-webkit-scrollbar {
    width: 2px;
    height: 4px;
    background-color: var(--colors-light-gray);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--colors-marvel-red);
  }

  ${media.gteMediumMedia} {
    max-width: 96rem;
  }
`;

const StyledHeading = styled(Text)`
  text-transform: uppercase;

  ${media.lteSmallMedia} {
    ${typographyStyles.h3};
  }

  ${media.smallMedia} {
    padding: var(--spacing-none) var(--spacing-48);
  }
  ${media.lteExtraSmallMedia} {
    padding: var(--spacing-none) var(--spacing-16);
  }
`;

const List = styled.ul`
  display: flex;
  gap: var(--spacing-16);
  overflow-x: auto;
  list-style: none;
  margin: var(--spacing-none);
  padding: var(--spacing-24) var(--spacing-none);
  padding-bottom: var(--spacing-12);

  ${media.smallMedia} {
    & > :first-child {
      margin-left: var(--spacing-48);
    }
    & > :last-child {
      margin-right: var(--spacing-48);
    }
  }
  ${media.lteExtraSmallMedia} {
    & > :first-child {
      margin-left: var(--spacing-16);
    }
    & > :last-child {
      margin-right: var(--spacing-16);
    }
  }
`;
