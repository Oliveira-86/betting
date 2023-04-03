import styled, { css } from "styled-components";


export const StyledBadge = styled.div`
  margin-right:8px;
  border-radius: 8px;
  border: 1 solid ${({ theme }) => theme.colors.grey_strong};
  cursor: pointer;
  padding: 5px 8px;
  
  ${({ theme, variant }) => {
    switch(variant) {
      case 'white':
       return `background-color: ${theme.colors.white}`
      case 'ice':
       return `background-color: ${theme.colors.ice}`
      case 'grey':
       return `background-color: ${theme.colors.grey}`
      case 'grey_light':
       return `background-color: ${theme.colors.grey_light}`
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