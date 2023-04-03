import styled, { css } from "styled-components";

export const StyledNavSidebar = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 80%;
  background-color: ${({ theme }) => theme.colors.black};  
  height: 100vh;
  overflow-y: hidden;
  display: none;
  position: absolute;
  top: 0;
  ${({ isOpen }) => isOpen 
    && css`
      display: block;
      position: fixed;
      top: 0px;
      z-index: 1000;
      `  
  }
`

export const Content = styled.div`
  width: 100%;
  height: 400px;
  padding: 8px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 50px;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  
`

export const BgShadow = styled.div`
  min-width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  display: none;
  z-index: 1000;
  ${({ isOpen }) => isOpen 
    && css`
      display: block;
      position: fixed;
      top: 0px;
      z-index: 1000;`  
  }
`