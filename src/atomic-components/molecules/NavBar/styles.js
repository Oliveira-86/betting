import styled, { css } from "styled-components";
import { StyledLink } from "../../atoms/Link/styles";

export const StyledHeaderMol = styled.header`
  overflow-y: hidden;
  width: ${({ widthProps }) => widthProps};
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px 15px;
  position: ${({ isMobile }) => isMobile ? 'relative' : 'fixed'};
  min-width: 100px;
  z-index: 100;
  
  ${({ isMobile, hasSameHeight }) => isMobile && hasSameHeight 
      ? css`
        justify-content: space-between;
        padding: 10px 25px;
        position: fixed;
        top: 0;`
      : isMobile && css`
        justify-content: space-between;
        padding: 10px 25px;`
    }
`

export const Row = styled.nav`
  margin-top: ${({ marginTop }) => marginTop ? '5px' : '0px'};
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ widthProps }) => widthProps};
`
export const UnderLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-top: 1.5px;
`