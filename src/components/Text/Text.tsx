"use client";

import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface PropTypes {
  level: "h1" | "h2" | "p" | "span";
}

const StyledText = styled.p<PropTypes>`
  font-size: ${(props) =>
    props.level === "h1" ? "2em" : props.level === "h2" ? "1.5em" : "1em"};
  font-weight: ${(props) => (props.level === "h1" ? "bold" : "normal")};
  text-transform: ${(props) => (props.level === "h2" ? "uppercase" : "none")};
`;

const Text: FC<PropsWithChildren<PropTypes>> = ({
  level = "p",
  children,
  ...props
}) => {
  return (
    <StyledText level={level} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
