"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import Search from "../icons/Search";
import styled from "styled-components";

export interface PropTypes {
  value?: string;
  onChange: (value: string) => void;
}

export const SearchInput: FC<PropTypes> = ({ value, onChange, ...props }) => {
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    if (value !== undefined && value !== inputValue) {
      setInputValue(value || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setInputValue(event.target.value);
  };
  return (
    <InputWrapper {...props}>
      <Search />
      <StyledInput
        type="search"
        placeholder="SEARCH A CHARACTER..."
        value={value}
        onChange={handleChange}
        data-testid="search-input"
      />
    </InputWrapper>
  );
};

export default SearchInput;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: var(--spacing-8);
  border-bottom: 0.1rem solid var(--colors-black);
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding-left: var(--spacing-12);
  color: var(--colors-black);
  text-transform: uppercase;

  &::placeholder {
    text-transform: uppercase;
    color: var(--colors-dark-gray);
  }
`;
