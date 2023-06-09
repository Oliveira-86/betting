import styled from "styled-components";

export const StyledCarousel = styled.div`
    width: 100%;
    height: 100%;

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
  border: 1px solid ${({ theme }) => theme.colors.ice};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0px;
  z-index: 10;
`;

export const NextButton = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.ice};  
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0px;
`;


export const StyledCard = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.div`
  margin-left: 8px;
`

export const StyledCarHomeCarousel = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerBadge = styled.div`
  margin-left: 8px;
`

export const DotContainer = styled.div`
  position: absolute;
  bottom: -35px;
  
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`

export const Dot = styled.div`
  margin-right: 10px; 
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: ${({ theme, active }) => active 
    ? theme.colors.secondary 
    : theme.colors.grey_light
  };
    
`;
