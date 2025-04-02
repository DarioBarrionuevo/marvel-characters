import { css } from "styled-components";

export const weight = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const sharedStyles = css`
  line-height: 1.2;
`;

const typographyStyles = {
  h1: css`
    font-size: 4rem;
    font-weight: ${weight.bold};
  `,
  h2: css`
    font-size: 3.2rem;
    font-weight: ${weight.bold};
  `,
  h3: css`
    font-size: 2.4rem;
    font-weight: ${weight.bold};
  `,

  p1: css`
    ${sharedStyles};
    font-size: 1.6rem;
    font-weight: ${weight.regular};
  `,
  p2: css`
    ${sharedStyles};
    font-size: 1.4rem;
    font-weight: ${weight.regular};
  `,
  p3: css`
    ${sharedStyles};
    font-size: 1.2rem;
    font-weight: ${weight.regular};
  `,
};

export default typographyStyles;
