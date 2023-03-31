import styled, { css } from "styled-components";

export const StyledHeaderMol = styled.header` 
  width: ${({ widthProps }) => widthProps};
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px 15px;
  z-index: 1000;
  ${({ hasSameHeight }) =>  {
    if (hasSameHeight) {
      return css`
        position: fixed;
        top: 0px;
      `
    } else {
      return css`
        position: relative;
      `
    }
  }}
`

export const Row = styled.nav`
  margin-top: ${({ marginTop }) => marginTop ? '5px' : '0px'};
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ widthProps }) => widthProps};
`
