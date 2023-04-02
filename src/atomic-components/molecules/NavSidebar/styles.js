import styled, { css } from "styled-components";

export const StyledNavSidebar = styled.div`
  /* display: none;
  margin-left: -299px; */
  display: flex;
  flex-direction: row;
  min-width: 80%;
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.black};  
  min-height: 100%;
  display: none;
  position: absolute;
  top: 0;
  ${({ isOpen }) => isOpen 
    && css`
      display: block;
      position: absolute;
      top: 0;
      margin-left: 0;`  
  }
  transition: all 1s;
  /* transform: translateZ(0); */
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
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  display: none;
  ${({ isOpen }) => isOpen 
    && css`
      display: block;
      position: absolute;
      top: 0;
      margin-left: 0;`  
  }
`