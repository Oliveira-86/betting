import styled, { css } from "styled-components";


export const StyledCard = styled.div`
  margin-right:8px;
  border-radius: 8px;
  border: none;
  ${({ theme, variant }) => {
    switch(variant) {
      case 'ice':
       return `background-color: ${theme.colors.ice}`
      case 'grey':
       return `background-color: ${theme.colors.grey}`
      case 'black':
       return `background-color: ${theme.colors.black}`
      case 'secondary':
       return `background-color: ${theme.colors.secondary}`
       default:
        return `background-color: ${theme.colors.primary}`
    }
  }};
  ${({ widthProps }) => widthProps && css`
    min-width: ${widthProps};
  `}
  ${({ heightProps }) => heightProps && css`
    height: ${heightProps};
  `}
  ${({ paddingProps }) => paddingProps && css`
    padding: ${paddingProps};
  `}

  ${({ centered }) => centered && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}

`;