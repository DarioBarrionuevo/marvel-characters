"use client";

import typography from "@/theme/typography";
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export interface PropTypes {
  level: "h1" | "h2" | "p1" | "p2" | "p3";
}

const StyledText = styled.p.withConfig({
  shouldForwardProp: (prop) => !["level"].includes(prop),
})<PropTypes>`
  ${({ level }) => typography[level]};
`;
const Text: FC<PropsWithChildren<PropTypes>> = ({
  level,
  children,
  ...props
}) => {
  const asTarget = ["h1", "h2"].includes(level) ? level : "p";

  return (
    <StyledText level={level} as={asTarget} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
