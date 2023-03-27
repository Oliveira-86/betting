import styled, { css } from "styled-components";


export const StyledBanner = styled.div`
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;

  ${({ isMobile }) => isMobile && css`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: ${({ slideIndex }) => slideIndex ? 0 : 1};
    transition: opacity ease-in-out 0.4s;
    border-radius: 20px;
  `}
`; 