import styled from "styled-components";

export const StyledHomeContent = styled.div`
  width: ${({ isMobile }) => isMobile ? '100%' : '75%'};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const StyledCarHomeCarousel = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const CarouselContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`