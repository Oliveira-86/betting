import styled, { css } from "styled-components";

export const StyledHeaderMol = styled.header`
  overflow-y: hidden;
  width: ${({ widthProps }) => widthProps};
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px 15px;
  z-index: 100px;
  position: relative;
  min-width: 100px;

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
