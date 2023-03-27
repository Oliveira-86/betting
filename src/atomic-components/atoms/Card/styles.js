import styled, { css } from "styled-components";


export const StyledCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.ice};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

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