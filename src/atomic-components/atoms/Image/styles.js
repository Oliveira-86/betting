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

export const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: inset 1000px 1000px 1000px 2px rgba(0, 0, 0, 0.25);
`

