import styled, { css } from "styled-components";

export const StyledCarousel = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.black};
    padding-bottom: 50px;
`;

export const Row = styled.div`
  width: 100%;
  height:100%;
  position: relative;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  scroll-behavior: smooth;
  overflow: hidden;
  overflow-x: scroll;

  ${({ isMobile }) => isMobile && css`
    max-width: 75%;
    height: 375px;
    margin: 100px auto 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.secondary};
  `}

  ::-webkit-scrollbar {
    display: none;
  }
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
  background-color: ${({ theme }) => theme.colors.shadow};
  border: 1.5px solid ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 10px;
`;

export const NextButton = styled.div`
  background-color: ${({ theme }) => theme.colors.shadow};
  border: 1.5px solid ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 10px;
`;

export const StyledCard = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledBanner = styled.div`
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;

   ${({ slideIndex }) => slideIndex ? css`
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;
        transition: opacity ease-in-out 0.4s;
        border-radius: 20px;
      ` : css`
        opacity: 1;
      `
    }



  ${({ isMobile }) => isMobile && css`
    ${({ slideIndex }) => slideIndex ? css`
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;
        transition: opacity ease-in-out 0.4s;
        border-radius: 20px;
      ` : css`
        opacity: 1;
      `
    }
  `}
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