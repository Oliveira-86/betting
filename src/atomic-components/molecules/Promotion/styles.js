import styled, { css } from "styled-components";

export const BannerDown = styled.div`
  margin: 40px 15px;
  border-radius: 8px;
  display: flex;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: transparent;

   ${({ widthProps }) => widthProps && css`
    width: ${widthProps};
  `};
  ${({ heightProps }) => heightProps && css`
    height: ${heightProps};
  `};
`