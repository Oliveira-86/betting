import styled from "styled-components";

export const StyledCarousel = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 20px;
    padding-bottom: 25px;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom: .8px solid ${({ theme }) => theme.colors.grey_light};
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: ${({ isMobile }) => isMobile ? 'scroll' : 'hidden'};
  white-space: nowrap;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: row;
`;

export const StyledScroll = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledArrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PrevButton = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  z-index: 10;
  margin-right: 8px;
  margin-left: 8px;
`;

export const NextButton = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey_light};  
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
`;

export const StyledTitle = styled.div`
  width: 270px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.div`
  padding-top: 5px;
  border-radius: ${({ isMobile }) => isMobile ? '5px' : '10px'};
  margin-right: 8px;
  cursor: pointer;
  transition: transform .2s;
  background-color: ${({ theme }) => theme.colors.blue};

  &:hover {
    transform: scale(1.02);
    /* border-radius: 12px; */
    
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`