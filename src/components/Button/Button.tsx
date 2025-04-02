"use client";
import styled from "styled-components";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  FunctionComponent,
  MouseEvent,
  SVGProps,
} from "react";

export enum ICON_SIZE {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export type PropTypes = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  size?: ICON_SIZE;
};
const WIDTH_BY_SIZE = {
  [ICON_SIZE.SMALL]: "1.2rem",
  [ICON_SIZE.MEDIUM]: "2.4rem",
  [ICON_SIZE.LARGE]: "3.6rem",
};

const Button: FC<PropTypes> = ({
  onClick,
  icon: Icon,
  size = ICON_SIZE.MEDIUM,
  ...props
}) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick?.(e);
  };

  return (
    <StyledButton
      onClick={handleClick}
      data-testid="icon-button"
      size={size}
      {...props}
    >
      <Icon />
    </StyledButton>
  );
};

export default Button;

export const StyledButton = styled.button<{ size: ICON_SIZE }>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  padding: var(--spacing-none);
  margin: var(--spacing-none);

  background: none;
  cursor: pointer;

  & svg {
    width: ${({ size }) => WIDTH_BY_SIZE[size]};
  }
`;
