import styled, { css } from "styled-components";


export const StyledImage = styled.img`
  ${({ widthProps }) => widthProps && css`
    width: ${widthProps};
  `};
  ${({ heightProps }) => heightProps && css`
    height: ${heightProps};
  `};
  ${({ borderRadius }) => borderRadius && css`
    border-radius: ${borderRadius};
  `};

  ${({ isMobile }) => isMobile && css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${({ heightProps }) => heightProps && css`
      height: ${heightProps};
    `};
  `}
`;

