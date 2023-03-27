import styled, { css } from "styled-components";

export const StyledHeaderMol = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primary};
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

export const Row = styled.div`
  margin-top: 5px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ widthProps }) => widthProps};
`
