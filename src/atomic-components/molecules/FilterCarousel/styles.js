import styled, { css } from "styled-components";

export const StyledCarousel = styled.div`
    width: 100%;
    overflow: hidden;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  overflow: scroll;
  border-radius: 0px;
  margin: 0px auto 0;
  white-space: nowrap;
  scroll-behavior: smooth;
  margin-left: 8px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledScroll = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const StyledBanner = styled.div`
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;

`; 



