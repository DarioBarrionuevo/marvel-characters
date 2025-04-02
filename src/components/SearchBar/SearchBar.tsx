"use client";
import { FC } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import SearchInput from "../SearchInput/SearchInput";

export interface PropTypes {
  value: string;
  onChange: (value: string) => void;
  count?: number;
}

const SearchBar: FC<PropTypes> = ({ value, count, onChange, ...props }) => {
  return (
    <Container {...props}>
      <SearchInput value={value} onChange={onChange} />

      <StyledResultsCount level="p">
        {count} {count === 1 ? "RESULT" : "RESULTS"}
      </StyledResultsCount>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
`;

const StyledResultsCount = styled(Text)`
  text-transform: uppercase;
`;
